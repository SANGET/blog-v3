# Promise 技术详解

这次来聊聊 Promise。目标人群是对 js 编程有一定基本了解的同学，例如基本语法，回调的概念，同时对 Promise 概念既熟悉又陌生的，想要彻底搞清楚 Promise 相关的知识的。

这里主要是介绍 Promise 的工作原理，以及进一步实现一个简易的 Promise 对象，希望对大家有帮助。

## 入门

### 什么是 Promise

Promise 是一个 js 的对象，以下称作 Promise 对象。Promise 对象是一个代理对象（代理一个值），被代理的值在 Promise 对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的 promise 对象。---- MDN

上面是比较官方的解释，那这里我们用更易懂的比喻来解释一下 Promise 的根本作用：

Promise 对象相当于一个代理人，他可以帮你完成任意工作，并且这个代理人很守承诺，有求必应，有债必还（Promise）。

有一天你告诉他，你想做一件很麻烦的事情，并且你不知道什么时候会完成，如果你等待这件事情完成，那后续的工作就无法继续了（被阻塞）。

于是你打算将这个事情的处理，委托给这个代理人，并且告诉他，处理完了来通知你（通过 Executor）。

处理结果有可能成功或失败，不过没关系，代理人都会通知到位的，只要在事先说清楚如何告诉你（handlers: resolve, reject）。

我们将上面做成 Promise 的实现看看：

```js
// 我们需要通过网络获取一些数据
const executor = (resolve, reject) => {
  // resolve, reject 由 Promise 对象被实例化后传入
  fetch(api)
    .then(() => {
      // 获取成功后调用 resolve
      resolve()
    })
    .catch(() => {
      // 获取失败后调用 reject
      reject()
    })
}

// 将数据
const p = new Promise(executor)

p
  .then(function success() {
    // 成功 resolve
  })
  .catch(function fail() {
    // 失败被 reject
  })
```

总的来说，Promise 对象是一个代理，你只需要告诉他如何执行你要做的事情，在什么时刻任务完成，完成后他便会通知你，便于处理后续工作。

### Promise 有什么作用

根据上面对 Promise 的描述，Promise 的作用便是你的私人代理。在程序的角度来说，就是

### 什么时候用 Promise

- Promise 解决了什么问题
- 有什么好处

## 进阶

### Promise 规范

### Promise 实现

### 手写一个 Promise 实现

```js
function PromiseA(executor) {
  if(typeof executor !== 'function') return console.error('executor mast be a function');
  this.status = 'pedding';
  this.thenCallback
  this.catchCallback
  this.finalCallback
  this.executor = executor;
  let done = () => {
    if(typeof this.finalCallback === 'function') {
      this.finalCallback();
    }
  }
  let resolve = (value) => {
    this.status = 'fulfilled'
    this.thenCallback(value);
    done();
  }
  let reject = (reason) => {
    this.status = 'rejected';
    this.catchCallback(reason)
    done();
  }
  executor(resolve, reject);
  return this;
}

PromiseA.prototype.then = function(thenCallback) {
  this.thenCallback = thenCallback;
  return this;
}

PromiseA.prototype.catch = function(catchCallback) {
  this.catchCallback = catchCallback;
  return this;
}

PromiseA.prototype.final = function(finalCallback) {
  this.finalCallback = finalCallback;
  return this;
}

var p = new PromiseA((resolve, reject) => {
  setTimeout(() => {
    if(Math.random() < 0.5) {
      resolve('resolve')
    } else {
      reject('reject')
    }
  }, 1000);
})

p.then((res) => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).final(() => {
  console.log('final')
})
```
