### 强缓存

- Expires (http1.0) 指定缓存过期时间，过期之前无需访问服务器
- Cache-Control (http1.1)
  - max-age 有效时间内，无需访问服务器，直接从浏览器获取结果 本地结果（disk cache）
  - no-cache 强制进行【协商缓存】
  - no-store 每次都从服务端请求，不强缓存也不协商缓存
  - private / public 是否能被代理服务器缓存

### 协商缓存

先向服务端发起一次 get 请求，资源没用修改 返回状态码 304


- Last-Modify(response)/ if-modified-since 
  - 颗粒度不够细，精确到秒
- Etag(response) / if-none-match 
  - http 1.1
  - 根据文件内容，通过hash运算生成的字符串，相当于文件指纹
  - 如果资源尺寸较大，修改频繁，生成 etag 就比较耗性能