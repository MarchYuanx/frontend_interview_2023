function myInstanceof(child, parent){
  // 过滤掉 null
  if(child === null){
    return false
  }
  // 过滤掉基础类型
  if(typeof child !== 'object' && typeof child !== 'function'){
    return false
  }
  let proto = child.__proto__
  while(true){
    if(proto === null) return false
    if(proto === parent.prototype) return true
    proto = proto.__proto__
  }
}

const res = myInstanceof({}, WeakMap)

console.log('[1]',23 instanceof Number)
console.log('[2]',(23) instanceof Number)

// let a = {
//   proto: {
//     c: 'ss'
//   }
// }

// let proto = a.proto

// proto = {ss: 222}

// console.log(a.proto)

