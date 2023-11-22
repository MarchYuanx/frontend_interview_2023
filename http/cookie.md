HTTP 无状态 每次请求都要带上 cookie 以帮助识别身份
服务的也可以向客户端 set-cookie cookie 大小限制为 4kb
默认有跨域限制 不可以跨域共享、传递 cookie

HTML5 之前 cookie 常被用于本地存储
HTML5 之后推荐使用 localStorage 和 sessionStorage （当前tab下）

现代浏览器开始禁止第三方cookie
禁止网页引入的第三方 js 设置 cookie，打击第三方广告 保护用户隐私
新增属性 sameSite: Strict / Lax / None


SSO 单点登录
cookie 设置 domain 主域名相同
.baidu.com 
- www.baidu.com
- image.baidu.com