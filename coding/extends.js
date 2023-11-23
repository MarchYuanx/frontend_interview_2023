// 寄生组合继承
// 在子类中调用父类的构造函数，并将子类的 prototype 指向父类的 prototype
function Parent(name){
  this.name = name || 'parent'
  this.age = 50
  this.home = 'sz'
  this.getWork = function(){
    console.log('workkkkk')
  }
}

Parent.prototype.sayHello = function(){
  console.log('parent say hello')
}
Parent.prototype.getInfo = function(){
  console.log(`home=${this.home},age=${this.age},name=${this.name}`)
}

function Child(...arg){
  Parent.call(this,...arg)
  this.go = function(){
    console.log('child go...')
  }
}

Child.prototype = Object.create(Parent.prototype)
// 对比 Child.prototype = Parent.prototype 更好
// 这样对 Child.prototype 的修改并不会影响父类
Child.prototype.constructor = Child

const child = new Child('cs')

child.go()
child.getInfo()

//

// function Parent(name) {
//   this.name = name;
//   this.say = () => {
//     console.log(111);
//   };
// }
// Parent.prototype.play = () => {
//   console.log(222);
// };



// function Children(name) {
//   Parent.call(this);
//   this.name = name;
// }
// Children.prototype = Object.create(Parent.prototype);
// Children.prototype.constructor = Children;
