class LRUCache {
  constructor(capacity){
    this.capacity = capacity
    this.map = new Map()
  }
  get(key){
    if(!this.map.has(key)){
      return 
    }

    const val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }
  set(key, val){
    if(this.map.has(key)){
      this.map.delete(key)
    }

    this.map.set(key, val)

    if(this.map.size > this.capacity){
      // 超出容量删除首位
      const deleteKey = this.map.keys().next().value
      this.map.delete(deleteKey)
    }
  }
}