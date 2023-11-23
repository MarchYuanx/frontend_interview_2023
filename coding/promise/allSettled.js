// promise.allSettled 
// 所有 Promise 实例都解析或拒绝后才会被解析。
// 它的返回值是一个包含所有 Promise 结果（无论解析还是拒绝）的对象数组
// 每个对象都具有 status 和 value 或 reason 属性。
// 即使解析的 promise 结果全部失败，它自身的状态也是成功的


function promiseAllSettled(promise){
  return new Promise((resolve, reject)=>{
    let data = []
    let count = 0
    for(let i=0;i<promise.length;i++){
      promise[i]
        .then(res =>{
          data[i] = {status: 'fulfilled', value: res}
          count ++
          if(count === promise.length){
            resolve(data)
          }
        })
        .catch(reason => {
          data[i] = { status: 'rejected', reason: reason }
          count ++
          if(count === promise.length){
            resolve(data)
          }
        })
    }
  })
}


const p1 = Promise.resolve('p1')

const p2 =  new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

// const p4 = Promise.reject('p4')

// const p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('p5 rejected 延时1.5秒')
//   }, 1500)
// }).catch()

const p = [Promise.reject('p4'), Promise.reject('p4')]

promiseAllSettled(p)
  .then(res => {
    console.log({res})
  })
  .catch(reason => {
    console.log({reason})
  })


Promise.allSettled(p)
  .then(res => {
    console.log('[Promise.allSettled]',{res})
  })
  .catch(reason => {
    console.log({reason})
  })