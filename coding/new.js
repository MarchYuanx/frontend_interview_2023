function myNew(fn, ...args){
  // 创建一个空对象
  let obj = {}

  // 把对象的原型对象指向构造函数的原型链
  obj.__proto__ = fn.constructor.prototype

  /**
   * 上面等价于 let obj = Object.create(fn.constructor)
  */

  // 执行构造函数
  let res = fn.constructor.apply(obj, args)

  return (typeof res === 'object' && res !== null) ? res : {}
}

// {} 创建空对象 原型指向 Object.prototype
// Object.create 创建空对象 原型指向传入的参数


const person = {
  name: 'JACK',
  age: 18
}

const p2 = Object.create(person)
const p3 = {}
console.log(p2, p2.age, p2.__proto__)
console.log(p3, p3.age, p3.__proto__)