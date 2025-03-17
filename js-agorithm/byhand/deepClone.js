function deepClone(obj) {
  // 处理 null 或非对象类型
  if (obj === null || typeof obj !== "object") return obj;

  // 处理数组和对象
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]); // 递归复制
    }
  }
  return result;
}

const original = { a: 1, b: { c: 2 } };
const deep = deepClone(original);