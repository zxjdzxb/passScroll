function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj // 如果是原始类型或 null，则直接返回
  }

  let clone = Array.isArray(obj) ? [] : {} // 根据类型创建一个新对象或数组

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]) // 递归调用深拷贝函数复制子对象
    }
  }

  return clone
}
const originalObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: [
    4,
    5,
    {
      g: 6
    }
  ]
}

const clonedObj = deepClone(originalObj)
console.log(clonedObj)
