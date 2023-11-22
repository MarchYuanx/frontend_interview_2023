class LazyMan {

  constructor(name){
    this.name = name
    this.tasks = []
    setTimeout(()=>{
      this.next()
    })
  }
  
  next(){
    const task = this.tasks.shift()
    if(task){
      task()
    }
  }

  eat(food){
    const task = ()=>{
      console.log(`${this.name} eat ${food}`)
      this.next()
    }
    this.tasks.push(task)
    return this
  }

  sleep(seconds){
    const task = ()=>{
      console.log(`${this.name} start sleep`)
      setTimeout(()=>{
        console.log(`${this.name} sleep ${seconds} seconds`)
        this.next()
      }, seconds * 1000)
    }
    this.tasks.push(task)
    return this
  }

}

const me = new LazyMan('jack')

me.eat('apple').eat('banana').sleep(10).eat('rich')
