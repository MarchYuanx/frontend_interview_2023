// 简单 暴力 粗糙
// const newObj = JSON.parse(JSON.stringify(obj))

function deepCopyJson(obj) {
  return JSON.parse(JSON.stringify(obj))
}


function deepCopy(obj) {
  // WeakMap 是弱引用 不会阻止 js 对象的垃圾回收 
  // WeakMap 的 key 需要为引用类型，因为基本类型和垃圾回收没啥关系捏
  const map = new WeakMap()
  // 这里使用闭包，把 map 提到外层

  function _deepCopy(obj) {
    // 基础类型直接返回
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    let newObj = Array.isArray(obj) ? [] : {}

    // 使用 map 记录对象/数组，避免循环引用
    if (map.has(obj)) {
      return map.get(obj)
    } else {
      // 记录 obj -> newObj 的映射关系
      // 遇到循环引用时直接返回
      map.set(obj, newObj)
    }

    // for in 会遍历到原型链上的属性 （Object.keys 不会哈哈）
    for (let key in obj) {
      // 避免拷贝到原型链上的属性
      if (obj.hasOwnProperty(key)) {
        newObj[key] = _deepCopy(obj[key], map)
      }
    }

    return newObj
  }
  return _deepCopy(obj)
}


const data = {
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 4, 8]
};

data.ref = data

const newData = deepCopy(data)
console.log({ data })
console.log({ newData })

console.log('newData === data', newData === data)
console.log('newData === newData.ref', newData === newData.ref)
console.log('newData.ref === data.ref', newData.ref === data.ref)
