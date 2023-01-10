---
title: "密码管理器password-store命令行自动填入GPG私钥密码"
date: 2022-09-26T23:30:00Z
draft: false
tags:
- pass
- password-store
- 密码管理器
categories:
- 密码管理器
---
## TLNR
设置环境变量`PASSWORD_STORE_GPG_OPTS="--pinentry-mode loopback  --passphrase 私钥密码"`
## 研究过程
[man page](https://git.zx2c4.com/password-store/about/#ENVIRONMENT%20VARIABLES) 说明了环境变量 PASSWORD_STORE_GPG_OPTS 是要传递给 GPG 的所有调用的附加选项。
通过翻阅[源码](https://git.zx2c4.com/password-store/tree/src/password-store.sh#n9)可以看到GPG选项为：
```sh
GPG_OPTS=( $PASSWORD_STORE_GPG_OPTS "--quiet" "--yes" "--compress-algo=none" "--no-encrypt-to" )
```
那么只需要拼接`--pinentry-mode loopback  --passphrase 私钥密码`即可
