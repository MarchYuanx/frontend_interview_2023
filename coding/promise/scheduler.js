class Scheduler {
  constructor(limit){
    this.limit = limit
    this.tasks = []
    this.current = 0
    setTimeout(()=>{
      this.start()
    }, 0)
  }
  start(){
    for(let i=0;i<this.limit;i++){
      this.doNext()
    }
  }
  doNext(){
    while(this.tasks.length && this.current < this.limit){
      this.current++
      const task = this.tasks.shift()
      task().then((res)=>{
        this.current--
        this.doNext()
      })
    }
  }
  add(task){
    this.tasks.push(task)
  }
}

const scheduler = new Scheduler(2)

const timeout = time => new Promise(resolve => setTimeout(resolve, time))

addTask = (time, order)=>{
  scheduler.add(()=>timeout(time).then(()=>{console.log(order)}))
}

// 整个的完整执行流程：

// 一开始1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4

addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");