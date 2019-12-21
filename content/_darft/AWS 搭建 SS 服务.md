## 使用 AWS 搭建 SS

1. 在 AWS 的后台启动 Ubuntu 实例
2. 创建用于 SSH 的 pem 密钥
3. 然后连接实例，运行 `sudo apt-get update` 升级
4. 安装 SS

```shell
apt-get install python-pip
pip install git+https://github.com/shadowsocks/shadowsocks.git@master
```

5. 创建 SS config 并且启动服务

Create a config file /etc/shadowsocks.json. Example:

```json
{
    "server":"0.0.0.0",
    "server_port": 10000,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"p",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

```shell
ssserver -c /etc/shadowsocks.json -d start
```
