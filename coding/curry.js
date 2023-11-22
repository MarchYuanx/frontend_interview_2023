function curry(fn){
  function curried(...args){
    if(args.length >= fn.length){
      return fn(...args)
    } else {
      return function(...newArgs){
        return curried(...args, ...newArgs)
      }
    }
  }

  return curried
}


function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)
let addCurry = curry(add)


console.log(addCurry(1)(2)(3))


