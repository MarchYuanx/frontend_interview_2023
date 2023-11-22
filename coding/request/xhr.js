// 实现 fetch

/**
 * readyState 
 * 0 未初始化
 * 1 准备初始化
 * 2 已经发送
 * 3 正在接收
 * 4 完成响应
 */



const xhr = new XMLHttpRequest()

xhr.open('GET', 'http://domain/serivce')

// 在请求发送前 对状态进行监听
xhr.onreadystatechange = function(){
  if(xhr.readyState !== 4){
    return
  }

  if(xhr.status === 200){
    console.log(xhr.responseText)
  }else{
    console.log(`HTTP error status=${xhr.status}`)
  }
}

// 超时设置
xhr.timeout = 3000
// 超时回调
xhr.ontimeout = () => {
  console.log('timeout...')
}

xhr.upload.onprogress = p => {
  const percent = Math.round((p.loaded / p.total) * 100) + '%'
}

xhr.send()
