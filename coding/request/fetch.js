
fetch('http://domain/service', {
  method: 'GET',
  credentials: 'same-origin'
}).then(response => {
  if(response.ok){
    return response.json()
  }else{
    throw new Error('http error')
  }
}).then(json =>{
  console.log(json)
}).catch(error => {
  console.log(error)
})

// fetch 设置超时


function fetchTimeout(url, init, timeout = 3000){
  return new Promise((resolve, reject)=>{
    fetch(url, init).then(resolve).catch(reject)
    setTimeout(reject, timeout)
  })
}

// fetch 设置中断

const controller = new AbortController()

fetch('url', {
  method: 'GET',
  credentials: 'same-origin',
  signal: controller.signal
}).then(res => {

})

controller.abort()