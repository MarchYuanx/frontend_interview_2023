function formatUrl(object){
  let dataArr = []
  
  for(let key in object){
    dataArr.push(`${key}=${object[key]}`)
  }

  return dataArr.join('&')
}

export function ajax(options = {
  type: 'GET',
  data: {},
  timeout: 3000,
  url: ''
}){
  return new Promise((resolve, reject)=>{
    if(!options.url){
      return
    }

    const queryString = formatUrl(options.data);
    const onStateChange = ()=>{
      xhr.onreadystatechange = ()=>{
        if(xhr.readystate === 4){
          clearTimeout(timer)
          if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
            resolve(xhr.responseText)
          }else{
            reject(xhr.status)
          }
        }
      }
    }

    let timer
    let xhr

    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest()
    }else{
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    if(options.type.toUpperCase() === 'GET'){
      xhr.open('GET', `${options.url}?${queryString}`)
      onStateChange()
      xhr.send()
    }else{
      xhr.open('POST', options.url)
      xhr.setRequestHeader()
      onStateChange()
      xhr.send(options.data)
    }

    if(options.timeout){
      timer = setTimeout(()=>{
        xhr.abort()
      }, options.timeout)
    }

    xhr.send()
  })
}