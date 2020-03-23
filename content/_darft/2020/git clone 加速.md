## 各种资源加速方法

现有设置天梯

```sh
git config --global http.proxy "socks5h://127.0.0.1:1086"
git config --global https.proxy "socks5h://127.0.0.1:1086"
```

查看更改是否成功

```sh
git config --global --get http.proxy
git config --global --get https.proxy
```

取消代理

```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```

修改 host

```sh
66.220.155.12 github.global.ssl.fastly.net
151.101.228.249 global-ssl.fastly.net
```
