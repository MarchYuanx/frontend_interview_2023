class EventBus {
  constructor(){
    this.events = {}
  }


  on(type, fn, isOnce = false){
    if(this.events[type] === undefined){
      this.events[type] = []
    }
    this.events[type].push({
      fn,
      isOnce
    })
  }
  once(type, fn){
    this.on(type, fn, true)
  }
  off(type, fn){
    if(this.events[type] === undefined || this.events[type].length === 0){
      return 
    }

    if(!fn){
      this.events[type] = []
      return
    }

    this.events[type] = this.events[type].filter(item => item.fn !== fn)
  }
  emit(type, ...args){
    if(this.events[type] === undefined || this.events[type].length === 0){
      return 
    }

    this.events[type] = this.events[type].filter(item => {
      item.fn(...args)

      return item.isOnce ? false : true
    })
  }
}

const e = new EventBus()

function fn1(a,b){
  console.log('[fn1]',{a,b})
}
function fn2(a,b){
  console.log('[fn2]',{a,b})
}
function fn3(a,b){
  console.log('[fn3]',{a,b})
}

e.on('key1', fn1)
e.on('key1', fn2)
e.once('key1', fn3)

e.emit('key1', 1,2)
e.emit('key1', 3,4)
