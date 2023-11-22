// const list = document.getElementsByTagName('li')

// for(let i=0;i<list.length;i++){
//   list[i].addEventListener('click', function(e){
//     alert(`[li]index=${i},value=${i+1}`)
//   })
// }

const ul = document.getElementById('ul')

ul.addEventListener('click', function(e){
  if(e.target.tagName.toLowerCase()==='li'){
    const list = document.getElementsByTagName('li')
    const index = Array.prototype.indexOf.call(list, e.target)
    alert(`value=${e.target.innerHTML} index=${index}`)

  }
  
})