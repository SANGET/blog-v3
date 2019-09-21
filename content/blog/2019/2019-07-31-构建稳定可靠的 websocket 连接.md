---
author: Alex
date: 2019-07-31
layout: post
title: 构建稳定可靠的 websocket 连接
keywords: 可靠的 websocket, 稳定的 websocket
# permalink: /build-stable-websocket-connection
description: 「只有主动把控的才能稳定可靠。」
tags: 
  - 技术
  - 前端
---

## 目的

可靠稳固的连接，无感的自动验证、数据同步、多终端同步数据，并保障用户数据安全、隐私，打造与 `Telegram` 一样专注于 `IM` 的应用。所以保障与服务端的可靠连接是最重要的事情之一。

[elk-chat](https://chat.thinkmore.xyz) 拥有上述特点，是体验更好的 IM 客户端。

## websocket

websocket 连接并不可靠，想要建立稳定可靠的 `websocket` 链接，最理想的是在 `onclose` 或 `onerr` 的回调中尝试做重连。

但这两个回调有时候并不可靠，特别在移动端，当浏览器被退到后台运行时，即使`断开`或`异常`也未必触发 `onclose` 或 `onerr` 回调。

那如何保证 websocket 正确地、持续地与服务端连接？

## 主动断开

浏览器的 `DOM` 提供了一个 `visibilitychange` 事件，于是我们便可以通过监听它判断 `document.hidden` 获知当前页面是否退到后台运行。

```js
function handleVisibilityChange() {
  const isPageBeHide = document.hidden;
  if(isPageBeHide) {
    // ...do something
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange);
```

经过测试，`visibilitychange` 事件在在 Chrome, Safari, Firefox 等主流浏览器都是起作用的，包括 Android 和 iOS 终端下的 webview，所以 React-Native 封装的 webview 也适用。

于是可以尝试这样的机制：

1. 当页面被退到后台时，主动断开 websocket，停止心跳检测、消息发送，并清除 websocket 实例。
2. 当页面被激活时，再次建立 websocket 连接。

```js
let $WS

// 启动 websocket
function initWS() {
  if(!$WS) {
    $WS = new websocket('ws://api');
    $WS.onopen = () => {

    }
    $WS.onclose = () => {

    }
    $WS.onerror = () => {

    }
  }
}
// 关闭 websocket
function closeWS() {
  if($WS) {
    // 主动断开
    $WS.close();
    // 清除 websocket 实例
    $WS = null;
  }
}
// 重连 websocket
function reconnect() {
  closeWS();
  initWS();
}
// 应用启动时
initWS();

function handleVisibilityChange() {
  const isPageBeHide = document.hidden;
  if(isPageBeHide) {
    closeWS();
  } else {
    reconnect();
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange);
```

上述可以主动掌握连接，但这不能确保 `$WS.send()` 会在 `onopen` 后执行，毕竟这操作的主动权在应用业务中，所以我们还需要确保消息一定在 `onopen` 之后发送。

## 未连接成功前的请求队列

以下为基础 websocket 封装类，设置了 `unSendQueue` 来保存未连接成功时的请求，具体如下（被隐去了很多细节）：

```ts
import { EventEmitter, EventEmitterClass, Call } from 'basic-helper';

const onOpenMark = 'onOpen';
const onMessageMark = 'onMessage';

function wrapWSUrl(hostname) {
  if (!/wss?:\/\//.test(hostname)) {
    console.warn('websocket host 不正确', hostname);
  }
  return hostname;
}

class SocketHelper extends EventEmitterClass {
  // ... 被隐去的细节

  // 未连接成功前发起的请求
  unSendQueue: UnSendEntity = {};

  permissionsQueue: UnSendEntity = {};

  constructor(params: SocketParams) {
    super();
    this.params = params;
    this.initWS();
  }

  initWS = () => {
    if (this.connecting) return;
    this.connecting = true;
    const { apiHost } = this.params;
    if (!apiHost) {
      console.error('请传入 apiHost');
      return;
    }
    const wsApiHost = wrapWSUrl(apiHost);
    this.socket = new WebSocket(wsApiHost);
    this.socket.binaryType = 'arraybuffer';

    this.socket.onopen = this.onOpen;
    this.socket.onmessage = this.onMessage;
    this.socket.onerror = this.onErr;
    this.socket.onclose = this.onClose;
  }

  setReqQuquq = (requestID, success, fail) => {
    this.reqQueue[requestID.toString()] = {
      success,
      fail,
    };
  }

  clearQueue = () => {
    this.reqQueue = {};
    this.permissionsQueue = {};
  }

  send = (sendOptions) => {
    const {
      apiName, bufData, requestID,
      success, fail, needAuth
    } = sendOptions;
    if (!this.connected) {
      /**
       * 如果还没 onOpen 打开的，放入待发送队列中
       */
      // console.error('尚未连接');
      this.unSendQueue[requestID.toString()] = sendOptions;
      if (!this.isClosed) this.initWS();
    } else if (this.socket) {
      this.socket.send(data);
      this.setReqQuquq(requestID, success, fail);
    }
  }

  /**
   * 在 onopen 的时候发送在未 open 时候发送请求
   */
  sendNotComplete = (queue: UnSendEntity) => {
    const unSendList = Object.keys(queue);
    if (unSendList.length === 0) return;
    unSendList.forEach((requestID) => {
      const sendOptions = queue[requestID];
      this.send(sendOptions);
      delete queue[requestID];
    });
  }

  onOpen = () => {
    // this.params.onOpen();
    this.connected = true;
    this.connecting = false;
    this.emit(onOpenMark, {});
    this.emit(CONNECT_READY, {});
    // 在 onopen 发送未连接时发起的请求
    this.sendNotComplete(this.unSendQueue);
    this.isClosed = false;
  }

  onMessage = (event) => {
  }

  onErr = (e) => {
    console.log('onErr');
    /** 如果发生错误，则主动关闭 websocket 链接 */
    this.socket && this.socket.close();
  }

  onClose = (e) => {
    console.log('onClose');
    this.handleException(e);
  }

  handleException = (event) => {
    this.connected = false;
    this.socket = null;
    this.isClosed = true;
    this.clearQueue();
    EventEmitter.emit(ON_CONNECT_CLOSE, event);
  }
}

export default SocketHelper;
```

以下为基于 `SocketHelper` 的更进一步的封装（让 API 的用法与 `HTTP` 一致）：

```ts
import SocketHelper from './socket';

let $WS;
let prevWSParams;

function GetWS() {
  if (!$WS) console.error(SDKErrorDesc);
  return $WS;
}

function WSSend<T extends Api, S>(api: T, apiName: string, data?, needAuth = true): Promise<S> {
  return new Promise((resolve, reject) => {
    if (!$WS) {
      console.error(SDKErrorDesc);
      return reject(SDKErrorDesc);
    }
    const requestID = BigInt(UUID(16));
    const msgWrite = api.create(data);
    const bufData = api.encode(msgWrite).finish();

    // const finalData = encodeData(apiName, bufData, requestID);
    $WS.send({
      apiName,
      bufData,
      requestID,
      success: (res) => {
        resolve(res);
      },
      fail: (res) => {
        failResHandler(res);
        reject(res);
      },
      needAuth
    });
  });
}

function InitSDK(params: Params = prevWSParams) {
  /** 保存上一个参数 */
  if (params) prevWSParams = params;
  const { apiHost } = params;
  $WS = new SocketHelper({
    apiHost
  });
  return $WS;
}

/**
 * 检查是否正常链接
 */
function CheckConnectState() {
  let isConnecting = false;
  if (!$WS) return isConnecting;
  isConnecting = $WS.connected;
  return isConnecting;
}

/**
 * 关闭 websocket 链接
 */
function CloseWS() {
  if ($WS) {
    if ($WS.socket) $WS.socket.close();
    $WS = null;
  }
}

export {
  InitSDK, GetWS, WSSend, CheckConnectState, CloseWS
};
```

以下为发起请求的 API：

```ts
export async function ApplyLogin(form: IUserLoginReq) {
  const res = await WSSend<typeof UserLoginReq, IUserLoginResp>(
    UserLoginReq, 'UserLoginReq', form, false
  );
  if (res.SessionID) {
    /**
     * 1. 成功后设置 sessionID
     * 2. 设置 websocket 的权限
     */
    setHeaderSSID(res.SessionID);
    GetWS().setPermissions(true);
  }
  const result = Object.assign({}, res, {
    UserName: form.UserName,
    ...res.User
  });
  return result;
}
```

最后在业务应层调用此 API：

```js
const business = () => {
  ApplyLogin({
    // ...
  })
    .then((res) => {
      // ...
    })
}
```

当然还有一个问题是，有少部分请求可以不带 session，例如登陆，但是其他请求需要，这个需要在 SocketHelper 中再做进一步的验证封装，在未验证通过时，把需要验证的请求缓存到队列，然后连接成功并且验证成功后再发送，这样可以达到`无感登陆地数据同步`的体验。

详情参考 [elk-chat](https://github.com/elk-chat/elk_web/blob/master/packages/sdk/socket/index.ts)
