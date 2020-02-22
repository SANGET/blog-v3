# 方法

直接将 github 和 npm 的 ip 写入到 hosts 文件，避免 DNS 查询

设置 host 就行了

```sh
# for github
192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.228.133 assets-cdn.github.com
151.101.228.133 raw.githubusercontent.com
151.101.228.133 gist.githubusercontent.com
151.101.228.133 cloud.githubusercontent.com
151.101.228.133 camo.githubusercontent.com
151.101.228.133 avatars0.githubusercontent.com
151.101.228.133 avatars1.githubusercontent.com
151.101.228.133 avatars2.githubusercontent.com
151.101.228.133 avatars3.githubusercontent.com
151.101.228.133 avatars4.githubusercontent.com
151.101.228.133 avatars5.githubusercontent.com
151.101.228.133 avatars6.githubusercontent.com
151.101.228.133 avatars7.githubusercontent.com
151.101.228.133 avatars8.githubusercontent.com
192.30.253.116  api.github.com
# for github end

# for npm
104.16.18.35 registry.npmjs.org
104.16.17.35 registry.npmjs.org
104.16.24.35 registry.npmjs.org
104.16.16.35 registry.npmjs.org
104.16.20.35 registry.npmjs.org
104.16.27.35 registry.npmjs.org
104.16.21.35 registry.npmjs.org
104.16.26.35 registry.npmjs.org
104.16.19.35 registry.npmjs.org
104.16.22.35 registry.npmjs.org
104.16.25.35 registry.npmjs.org
104.16.23.35 registry.npmjs.org
# for npm end
```
