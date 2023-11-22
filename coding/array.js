const arr = [1, [2, [3]]] 
console.log(arr.flat(Infinity))
function flat5(arr){
  let res = []

  arr.forEach(item => {
    if(Array.isArray(item)){
      res.push(...flat(item))
    }else{
      res.push(item)
    }
  })
  return res
}

function flat6(arr){
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}

const brr = flat6(arr)
console.log(brr)

console.log([].concat(2,3,4,5,[2,[2],3],[4,5]))