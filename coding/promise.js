
const PENGDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED =  'rejected'

class MyPromise {
  constructor(executor){
    executor(this.resolve, this.reject)
  }

  // 初始状态 pending
  status = PENGDING

  // 成功后的值
  value = null

  // 失败后的原因
  reason = null

  // 成功回调函数
  onFulfilledCallback = []
  // 失败回调函数
  onRejectedCallback = []

  // 更新成功后的状态
  resolve = (value) => {
    if(this.status === PENGDING){
      this.status = FULFILLED
      this.value = value

      // 成功回调函数存在就调用
      while(this.onFulfilledCallback.length){
        this.onFulfilledCallback.shift()(value)
      }
    }
  }

  // 更新失败后的状态
  reject = (reason) => {
    if(this.status === PENGDING){
      this.status = REJECTED
      this.reason = reason

      // 失败回调函数存在就调用
      while(this.onRejectedCallback.length){
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected){
    if (this.status === FULFILLED){
      onFulfilled(this.value)
    } else if (this.status === REJECTED){
      onRejected(this.reason)
    } else if(this.status === PENGDING){
      this.onFulfilledCallback.push(onFulfilled)
      this.onRejectedCallback.push(onRejected)
    }
    // 实现链式调用
    const promise2 = new MyPromise((resolve, reject)=>{
      // 这里的内容在执行器中 会立即执行
      if(this.status === FULFILLED){
       
        const x = onFulfilled(this.value)
        // 如果返回值是 promise 将其 resolve
        resolvePromise(x, resolve, reject)
        
      }else if(this.status === REJECTED){
        onRejected(this.reason)
      }else if(this.status === PENGDING){
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })

    return promise2
  }
}


function resolvePromise(x, resolve, reject){
  if(x instanceof MyPromise){
    x.then(resolve, reject)
  }else{
    resolve(x)
  }
}


module.exports = MyPromise

const p = new MyPromise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('setttt')
  }, 2000)
})

p.then(value => {
  console.log('resolve 111', value)
}, reason => {
  console.log('reject', reason)
})

p.then(value => {
  console.log('resolve 222', value)
}, reason => {
  console.log('reject', reason)
})

p.then(value => {
  console.log('resolve 333', value)
}, reason => {
  console.log('reject', reason)
})



// promise 交替执行
// then 中返回 promise 实例相当于多出一个promise实例
// 慢两拍
// 第一拍 promise 需要由 pending 变为 fulfilled
// 第二拍 then 函数挂载到 MicroTaskQueue

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(4);
// }).then(() =>{
//   console.log(5);
// })

// Promise.resolve().then(() => {
//   console.log(11);
// }).then(() => {
//   console.log(22);
// }).then(() => {
//   console.log(33);
// }).then(() => {
//   console.log(44);
// }).then(() =>{
//   console.log(55);
// })

// Promise.resolve().then(() => {
//   console.log(111);
// }).then(() => {
//   console.log(222);
// }).then(() => {
//   console.log(333);
// }).then(() => {
//   console.log(444);
// }).then(() =>{
//   console.log(555);
// })