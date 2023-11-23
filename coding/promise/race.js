// promise.race

function promiseRace(promise){
  return new Promise((resolve, reject)=>{
    let data = []
    let count = 0
    for(let i=0;i<promise.length;i++){
      promise[i]()
        .then(res => resolve(res))
        .catch(error => reject(error))
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

promiseRace([ p2, p3, p4])
  .then(res => {
    console.log({res})
  })
  .catch(reason => {
    console.log({reason})
  })