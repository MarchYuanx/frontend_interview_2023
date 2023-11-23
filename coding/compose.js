function compose(...fn) {
  if (fn.length === 0) {
    return () => {}
  } else if (fn.length === 1) {
    return fn[0]
  } else {
    return function (...args) {
      let res
      for (let i = 0; i < fn.length; i++) {
        if (i === 0) {
          res = fn[i](...args)
        } else {
          res = fn[i](res)
        }
      }
      return res
    }
  }
}

// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
