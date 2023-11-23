// promise.all 一个失败就全部失败，返回全部值的

function promiseAny(promise){
  return new Promise((resolve, reject)=>{
    let data = []
    let count = 0
    for(let i=0;i<promise.length;i++){
      promise[i]()
        .then(res => resolve(res))
        .catch(reason => {
          data[i] = reason
          count++
          if(count === promise.length){
            reject(data)
          }
        })
    }
  })
}