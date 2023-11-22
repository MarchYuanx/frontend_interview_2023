// 如何在函数执行时绑定 this


// globalThis 
//  - 浏览器 window
//  - node global 
Function.prototype.customCall = function(context = globalThis, ...args){
  // context 为基础类型
  if(typeof context !== 'object') {
    context = new Object(context)
  }

  // 唯一标识符
  const fnKey = Symbol()

  context[fnKey] = this

  const res = context[fnKey](...args)

  delete context[fnKey] // 防止污染

  return res
}


Function.prototype.customApply = function(context = globalThis, args){
  // context 为基础类型
  if(typeof context !== 'object') {
    context = new Object(context)
  }

  // 唯一标识符
  const fnKey = Symbol()

  context[fnKey] = this

  const res = context[fnKey](...args)

  delete context[fnKey] // 防止污染

  return res
}

function test(){
  console.log(this)
}

test.customCall({ss: 22})