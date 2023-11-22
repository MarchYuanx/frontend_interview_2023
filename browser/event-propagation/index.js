const l1 = document.getElementById('level-1')
const l2 = document.getElementById('level-2')
const l3 = document.getElementById('level-3')

window.addEventListener('click', function(e){
  console.log('window 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)
document.addEventListener('click', function(e){
  console.log('document 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)
document.body.addEventListener('click', function(e){
  // e.stopPropagation()
  console.log('body 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)

l1.addEventListener('click', function(e){
  console.log('111 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)
l2.addEventListener('click', function(e){
  console.log('222 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)
l3.addEventListener('click', function(e){
  console.log('333 捕获', e.target.nodeName, e.currentTarget.nodeName)
}, true)

// addEventListener 第三个参数 设置事件是否为捕获阶段

// e.target.nodeName 当前点击的元素
// e.currentTarget.nodeName 绑定的事件监听的元素

window.addEventListener('click', function(e){
  console.log('window 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})
document.addEventListener('click', function(e){
  console.log('document 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})
document.body.addEventListener('click', function(e){
  console.log('body 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})

l1.addEventListener('click', function(e){
  console.log('111 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})
l2.addEventListener('click', function(e){
  console.log('222 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})
l3.addEventListener('click', function(e){
  console.log('333 冒泡', e.target.nodeName, e.currentTarget.nodeName)
})



window.addEventListener('click', function(e){
  if(window.banned){
    alert('banned!')
    e.stopPropagation()
  }
}, true)