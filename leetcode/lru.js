// https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-100-liked


// 使用哈希表存储数据，保证 get set 时间复杂度 o(1)
// 数据结构需要有序
// 使用 Map ，Map 设置数据会放在最新的位置

// Map.keys() 会返回一个 迭代器结构
// Map.keys().next 会返回最老的数据
const obj = {}

const map = new Map()

obj[0] = 'a'
obj[2] = 'b'
obj[1] = 'c'

console.log(obj)

map.set(0, 'a')
map.set(2, 'b')
map.set(1, 'c')


console.log(map)