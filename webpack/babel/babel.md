babel es6 解析 es5 流程

1. code(es6) -> ast (es6) parse 解析
  - 词法分析，将 code 生成 token 流
  ```
  // Code
  a = 3
  
  // Token
  [
    { type: { ... }, value: "a", start: 0, end: 1, loc: { ... } },
    { type: { ... }, value: "=", start: 2, end: 3, loc: { ... } },
    { type: { ... }, value: "3", start: 4, end: 5, loc: { ... } },
  ]
  ```
  token 流可以做一些代码检查（eslint 的分号？），代码高亮

  语法分析，将 token 流转换成结构化的 ast 抽象语法树
2. ast(es6) -> ast(es5) transform 转换
3. asr(es5) -> code(es5) generate 生成



---
- babel/core
- babel/preset preset 执行顺序【从右往左】
- babel/parse 
- babel/plugin plugin执行顺序【从左往右】
- babel/Polyfill 垫平浏览器之间的差异