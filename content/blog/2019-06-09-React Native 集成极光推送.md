---
author: Alex
date: 2019-06-09
layout: post
title: React Native 集成极光推送
description: 基于 2019-06-07 为止的 JPush 3.3.2 版本...
keywords: React Native 集成极光推送
# permalink: "/react-native-integrated-jpush"
tags:
  - 记录
  - 技术
  - 前端
  - React-Native
---

--------------

> 基于 2019-06-07 为止的 JPush 3.3.2 版本

1. 申请极光开发账号
2. 生成项目，获取 AppKey
3. 安装 React-Native 并初始化项目

在 React-Native 项目目录下操作

```shell
yarn add jpush-react-native jcore-react-native

react-native link

# 然后输入 AppKey
```

然后程序自动把对应的 `project/android/app/build.gradle` `project/android/settings.gradle` 的配置自动写入

--------------

## 检查配置

> project/android/app/build.gradle

```gradle
android {
    ...
    defaultConfig {
        applicationId "yourApplicationId"
        ...
        manifestPlaceholders = [
                JPUSH_APPKEY: "yourAppKey", // 程序自动填充的 AppKey
                APP_CHANNEL : "default"     // 程序自动填充应用渠道号
        ]
    }
}
dependencies {
    ...
    implementation project(':jcore-react-native')
    implementation project(':jpush-react-native')
    ...
}
```

> project/android/settings.gradle

```gradle
rootProject.name = 'rootProject' // 项目的 rootProject

include ':jcore-react-native'
project(':jcore-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jcore-react-native/android')

include ':jpush-react-native'
project(':jpush-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jpush-react-native/android')
```

> project/android/app/AndroidManifest.xml

```xml
<application
    ...
    <!-- Required . Enable it you can get statistics data with channel -->
    <meta-data android:name="JPUSH_CHANNEL" android:value="${APP_CHANNEL}"/>
    <meta-data android:name="JPUSH_APPKEY" android:value="${JPUSH_APPKEY}"/>
</application>
```

--------------

## React-Native 加入 JPushPackage

> 这里只记录 RN 0.29.0 以上版本

打开 app 下的 MainApplication.java 文件，加入 JPushPackage

```java
public class MainApplication extends Application implements ReactApplication {
    // 设置为 true 将不弹出 toast
    private boolean SHUTDOWN_TOAST = false;
    // 设置为 true 将不打印 log
    private boolean SHUTDOWN_LOG = false;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG)
            );
        }
    };

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        JPushInterface.init(this); // 在这里初始化
    }
}
```

> project/android/app/src/java/.../MainActivity.java 做一些生命周期

```java
public class MainActivity extends ReactActivity {
    ...
    @Override
    protected void onPause() {
        super.onPause();
        JPushInterface.onPause(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        JPushInterface.onResume(this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}
```

Java 配置完毕，可以在 js 中调用了

```js
import JPushModule from 'jpush-react-native';

...
type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    // 新版本必需写回调函数
    // JPushModule.notifyJSDidLoad();
    JPushModule.notifyJSDidLoad((resultCode) => {
      if (resultCode === 0) {}
    });

    // 接收自定义消息
    JPushModule.addReceiveCustomMsgListener((message) => {
      this.setState({pushMsg: message});
    });
    // 接收推送通知
    JPushModule.addReceiveNotificationListener((message) => {
      console.log("receive notification: " + message);
    });
    // 打开通知
    JPushModule.addReceiveOpenNotificationListener((map) => {
      console.log("Opening notification!");
      console.log("map.extra: " + map.extras);
      // 可执行跳转操作，也可跳转原生页面
      // this.props.navigation.navigate("SecondActivity");
    });
  }

  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener();
    JPushModule.removeReceiveNotificationListener();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
```

好了，启动 APP，在极光的后台推送消息试试。

--------------

## 参考

- [https://www.jianshu.com/p/a71512a8f921](https://www.jianshu.com/p/a71512a8f921)
