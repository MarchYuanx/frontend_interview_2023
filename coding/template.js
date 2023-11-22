
function render(template, json){
  const reg = /\{\{(\w+)\}\}/
  if(reg.test(template)){
    const data = reg.exec(template)
    template = template.replace(data[0], json[data[1]])
    return render(template, json)
  }
  console.log(template)
  return template
}


let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let json = {
    name: '布兰',
    age: 12
}
render(template, json); // 我是布兰，年龄12，性别undefined

