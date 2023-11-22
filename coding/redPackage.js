// 提供了一个RedPackage的类，初始化时传入红包金额和个数，
// 需要实现一个openRedPackage方法，
// 每调一次都进行一次“抢红包”，并以console.log的形式输出抢到的红包金额。


class RedPackage {
  constructor (money, count) {
    this.money = money * 100
    this.count = count
  }

  getMoney(money){
    let res = 0
    while(res === 0){
      res = Math.floor(Math.random() * this.money)
    }
    return res
  }


  openRedPackage(){
    if(this.count === 0){
      console.log(`红包抽完了`)
    }
    if(this.count === 1){
      console.log(`抽到了${this.money / 100}元，剩余${0}元，剩余${0}个红包`)
      this.count = 0
      this.money = 0
      return 
    }

    let money = this.getMoney(this.money)
    this.money = this.money - money
    this.count = this.count - 1
    console.log(`抽到了${money / 100}元，剩余${this.money /100}元，剩余${this.count}个红包`)
  }
}

const r = new RedPackage(100,10)

r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()
r.openRedPackage()

// 还需要优化

