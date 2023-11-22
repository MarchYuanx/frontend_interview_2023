// 样例输入：1234567890
// 样例输出：1,234,567,890

function num2str(str){
  const arr = str.split('').reverse()
  let res = ''
  for(let i=0;i<arr.length;i++){
    if(i%3 === 0 && i !== 0){
      res = ',' + res
    }
    res = arr[i] + res
  }
  return res
}

console.log(num2str('1234567890'))