# 使用 AWS 搭建 SS

使用基于 C 的 libev 并发库的的 shadowsock-libev

参考 https://github.com/iMeiji/shadowsocks_install/wiki/shadowsocks-libev

## AWS 的 EC2 设置

打开安全策略

## Ubuntu 设置

1. 在 AWS 的后台启动 Ubuntu 实例
2. 创建用于 SSH 的 pem 密钥
3. 然后连接实例，运行 `sudo apt-get update` 升级
4. 安装 SS

```shell
sudo apt-get update
sudo apt-get install shadowsocks-libev
```

5. 编辑 `sudo vi /etc/shadowsocks-libev/config.json` 并且启动服务

```json
{
    "server":"0.0.0.0",
    "server_port":8888,
    "local_port":1080,
    "password":"pppp",
    "timeout":60,
    "method":"chacha20-ietf-poly1305"
}
```

控制脚本

```shell
sudo service shadowsocks-libev start
sudo service shadowsocks-libev stop
sudo service shadowsocks-libev status
sudo service shadowsocks-libev restart
```

运行信息查看

```shell
sudo service shadowsocks-libev status
netstat -lnp
```
