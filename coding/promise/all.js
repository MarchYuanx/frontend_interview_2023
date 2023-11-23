// promise.all 一个失败就全部失败，返回全部值的

function promiseAll(promise){
  return new Promise((resolve, reject)=>{
    let data = []
    let count = 0
    for(let i=0;i<promise.length;i++){
      promise[i]()
        .then(res =>{
          data[i] = res
          count++
          if(count === promise.length){
            resolve(data)
          }
        })
        .catch(reject)
    }
  })
}
// test

const p1 = () => Promise.resolve('p1')

const p2 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 延时一秒')
  }, 1000)
})

const p3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3 延时两秒')
  }, 2000)
})

const p4 = () => Promise.reject('p4')

const p5 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p5 rejected 延时1.5秒')
  }, 1500)
})

promiseAll([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(reason => {
    console.log(reason)
  })