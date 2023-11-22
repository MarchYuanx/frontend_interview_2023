function getType(val){
  const type = Object.prototype.toString.call(val).slice(8,-1).toLowerCase()
  console.log({
    val,type
  })
  return type
}

getType(null)
getType(undefined)
getType({})
getType(()=>{})
getType([[]])
getType(Symbol(2))
getType(BigInt(22))
getType(true)
getType(NaN)

