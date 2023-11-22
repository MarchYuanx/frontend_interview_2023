/**
 * @param num1 = '1234567890', num2 = '987654321'
 * @return '2222222211'
 * 
 */

function bigNumberAdd(num1, num2){
  const arr1 = num1.split('').reverse().map(item => Number(item))
  const arr2 = num2.split('').reverse().map(item => Number(item))

  const length = Math.max(arr1.length, arr2.length)

  // 是否进位
  let carry = 0
  let res = ''
  let n1 = 0
  let n2 = 0
  let sum = n1 + n2 + carry
  for(let i =0;i<length;i++){
    let n1 = (arr1[i] || 0)
    let n2 = (arr2[i] || 0)
    let sum = n1+n2+carry

    if(sum < 10){
      res = sum + res
      carry = 0
    }else if(sum === 10){
      res =  '0' + res 
      carry = 1
    }else {
      res = (sum%10) + res
      carry = 1
    }

  }
  console.log(res)
  return res
}


const num1 = '1234567890'
const num2 = '987654321'
bigNumberAdd(num1,num2)