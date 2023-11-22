https://juejin.cn/post/6894629999215640583?searchId=202311211818046DF5162087A80BDA291B

在 HTML 中会遇到以下三类 script：

<script src='xxx'></script>
<script src='xxx' async></script>
<script src='xxx' defer></script>

浏览器在解析 HTML 时，如果遇到一个没有任何属性的 script 标签，会暂停解析，去请求 js 文件，在请求完成后，执行 js，之后再继续解析 html （造成了html渲染阻塞）

### async
表示异步

对该 js 脚本的请求将会是异步的
- 如果请求 js 完成后，html还没用解析完毕，会暂停解析，执行js
- 如果此时已经完成 html 解析，无影响执行js就好
- async 不可控，执行顺序也取决于网络

###  defer 
表示延迟

对 js 脚本的请求也是异步的
但不会暂停 html 的解析

会再 html 解析完成之后 执行
执行顺序就是再 html 中的顺序


<script>	      在 HTML 中的顺序	 阻塞
<script async>	网络请求返回顺序	 可能阻塞，也可能不阻塞
<script defer>	在 HTML 中的顺序	 不阻塞


js 执行和 html 解析一定是互斥的