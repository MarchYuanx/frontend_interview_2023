
### 事件捕获、冒泡阶段

捕获阶段 -> 目标阶段 -> 冒泡阶段

window -> document -> body -> input(目标阶段) -> body -> document -> window 

### addEventListener 第三个参数

true 代表在捕获阶段执行
false（默认）代表在冒泡阶段执行

### 阻止事件传播
propagation - 传播

e.stopPropagation() //阻止事件传播，包括捕获、冒泡


### 阻止默认行为 
prevent - 阻止

e.preventDefault()
