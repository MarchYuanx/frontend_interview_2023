// bind 返回一个新的函数
// bind 可以绑定 this 和参数
// 箭头函数无法绑定 this



Function.prototype.customBind = function(context = globalThis, ...bindArgs){
  const self = this
  return function(...args){
    return self.apply(context, bindArgs.concat(args))
  }
}


function test(a,b){
  console.log(this, a,b)
}

const fn1 = test.customBind({x: 22})

fn1(1,3)