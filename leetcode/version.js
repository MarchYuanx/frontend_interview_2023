// 样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']

// Array.prototype.sort 期望的返回值是 number 而不是 boolean 
function versionSort(v1, v2){
  let arr1 = v1.split('.').map(item => Number(item))
  let arr2 = v2.split('.').map(item => Number(item))
  console.log({
    v1,v2,arr1,arr2
  })
  let length = Math.min(arr1.length, arr2.length)

  for(let i=0;i<length;i++){
    if(arr1[i] === arr2[i]){
      continue
    }else{
      return arr1[i] - arr2[i] 
    }
  }

  // case 4.5 vs 4.5.1
  return arr1.length - arr2.length 
}

const versions = ['2.3.3','0.1.1',  '0.302.1', '4.2', '4.3.5', '4.3','4.3.4.5']
function compare(versions){
  return versions.sort((v1, v2) => {
    let res = versionSort(v1, v2)
    console.log({res})
    return res
  })
}

console.log(compare(versions))

console.log([3,4,7,2,1].sort((a,b)=>(a-b > 0)))

