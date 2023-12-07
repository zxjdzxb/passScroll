# JavaScript数组操作技巧

去年的坑，现在来填啦 下一步继续学习大佬的[JS数组奇巧淫技 - 掘金 (juejin.cn)](https://juejin.cn/post/6844904194919366669 "https://juejin.cn/post/6844904194919366669")

## 数组创建

*   字面量方式（json方式）

```js
var arr1 = []; //创建一个空数组
var arr2 = [5]; //创建一个具有单个元素的数组
var arr3 = [5, 6, 7]; //创建一个具有多个元素的数组
```

*   构造函数方式

```js
var arr1 = new Array(); //创建一个空数组
var arr2 = new Array(5); //创建一个长度为5，值为空的数组
```

```js
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## 方法

可能不是很全，总结常用
[MDN补录](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### push

语法: array.push(item1, item2, …, itemX)

`push( )` 方法：可以将一个或者更多的参数添加在数组的尾部；返回添加后的数组的长度，原数组发生改变。
代码示例如下：

```js
var arr = [1, 2, 3, 4];
var a = arr.push(9, 8, 7);
console.log(a, arr); //1,2,3,4,9,8,7；
```

### unshift

语法: array.unshift(item1, item2, …, itemX)

`unshift( )` 方法：可以将一个或者更多的参数添加在数组的头部；返回添加后的数组的长度，原数组发生改变。

```js
var arr = [1, 2, 3, 4];
var a = arr.unshift(9, 8, 7);
console.log(a, arr); //9,8,7,1,2,3,4；
```

### pop

语法：array.pop()

`pop( )` 方法：从数组尾部删除一个元素，返回这个被删除的元素，原数组发生改变。

```js
var arr = [1, 2, 3, 4];
var a = arr.pop();
console.log(a, arr) //4；1,2,3，
```

### shift

 语法：array.shift()

`shift( )` 方法：从数组头部删除一个元素，返回这个被删除的元素，原数组发生改变。

```js
var arr = [1, 2, 3, 4];
var a = arr.shift();
console.log(a, arr) //1；2,3,4，
```

### slice

语法：array.slice(start, end)

`slice（）` 方法：如果不传参数，会返回原数组；如果一个参数，从该参数表示的索引开始截取，直至数组结束，返回这个截取数组，原数组不变；
两个参数，从第一个参数对应的索引开始截取，到第二个参数对应的索引结束，但包括第二个参数对应的索引上的值，原数组不改变 &最多接受两个参数

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus) //Orange,Lemon
```

###  splice

语法：array.splice(index, howmany, item1, …, itemX)

`splice( )` 方法：没有参数，返回空数组，原数组不变；
一个参数，从该参数表示的索引位开始截取，直至数组结束，返回截取的 数组，原数组改变；
两个参数，第一个参数表示开始截取的索引位，第二个参数表示截取的长度，返回截取的 数组，原数组改变；
三个或者更多参数，第三个及以后的参数表示要从截取位插入的值。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2);
console.log(fruits) //Banana,Orange
```

### reverse

  语法：array.reverse()

`reverse( )` 方法：用于颠倒数组中元素的顺序。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits) //Mango,Apple,Orange,Banana
```

### sort

   语法：array.sort(sortfunction)

`sort( )` 方法：用于对数组的元素进行排序。

```js
var Array = [1, 2, 3, 4, 5];
var fruits = Array.sort(function(a, b) {
  //return a - b; //从小到大
  return b - a; //从大到小
})
```

### join

 语法：array.join(separator)

`join( )` 方法：于把数组中的所有元素转换一个字符串, 元素是通过指定的分隔符进行分隔的。

```js
var arr = [1, 2, 3, 4]
var bbc = arr.join()
console.log(bbc) //1,2,3,4
```

### concat

语法：string.concat(string1, string2, …, stringX)

`concat( )` 方法：属于字符串的方法，数组也可以用，接受一个或多个参数，将参数中的值放到操作的数组后边，返回拼接的数组，原数组不变。如果参数是一个数组，则先把值提取出来再操作。

```js
var arr = [1, 2, 3, 4];
arr.concat([5, 6, 7]) //[1,2,3,4,5,6,7]
```

## ES5新增的一些数组方法

### indexOf（）

语法：string.indexOf(searchvalue, start)

`indexOf( )` 方法：字符串的方法，数组也可适用，此方法可返回某个指定的字符串值在字符串中首次出现的位置；若一个参数，返回这个参数在数组里面的索引值，如果参数不在操作的数组中，则返回 -1。

```js
var arr = [1, 2, 3, 4];
arr.indexOf(1) // 0
arr.indexOf(5) // -1
```

### forEach（）

  语法：array.forEach(function(currentValue, index, arr), thisValue)

` forEach( )` 方法：数组遍历，且只能够遍历数组，不接受返回值或返回值为 undefined。

```js
var arr = [1, 2, 3, 4, 5];
arr.forEach((item, index, arr) => {
  //item 为当前数组元素
  // index 为当前索引
  // arr 为数组名字
})
```

### map（）

语法：array.map(function(currentValue, index, arr), thisValue)

`map( )` 方法：数组的遍历，用来接收一个返回值，创建一个新数组，不改变原数组。

```js
var arr = [1, 2, 3, 4, 5, 6];
arr.map(function(item, index, arr) {
  return item * 2
})
//输出 [2,4,6,8,10,12]
```

#### 区别

forEach()方法不会返回执行结果，而是undefined。也就是说，forEach()会修改原来的数组。而map()方法会得到一个新的数组并返回。

#### 数组转换成对象

有时候需要将数组转换成对象的形式，使用 `.map()` 一类的迭代方法能达到目的，这里还有个更快的方法，前提是你正好希望对象的key就是数组的索引

```js
var fruits = [“banana”, “apple”, “orange”, “watermelon”];
var fruitsObj = {
  …
  fruits
};
console.log(fruitsObj);
// returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”,
// 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}
```

### filter（）

语法：array.filter(function(currentValue, index, arr), thisValue)

`filter( )` 方法：过滤出一些符合条件的元素，返回一个新数组。

```js
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = nums.filter((num) => {
  return num > 5;
});

console.log(res); // [6, 7, 8, 9, 10]
```

#### 两个数组的交集

找出两个数组的交集算是一道经典的JS面试题了，这题能很好地考察候选人的逻辑是否清晰，对数组的掌握是否熟练。这题的答案有很多，下面展示的是ES6的简洁写法

```js
var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues = […new Set(numOne)].filter(item => numTwo.includes(item));
console.log(duplicatedValues); // returns [2, 4, 6]
```

### some（）

语法：array.some(function(currentValue, index, arr), thisValue)

`some( )` 方法：检测数组中是否含有某一个值，返回一个布尔值，如果数组中有任意一个元素满足给定的条件，结果就为 true否则则为false。

```js
var a = [1, 15, 3, 9, 11, 23];
var evens = a.some((value, index, ar) => value % 2 == 0) //ture
if (evens) {
  console.log("不全是奇数。");
} else {
  console.log("全是奇数。");
}
```

### every（）

语法：array.every(function(currentValue, index, arr), thisValue)

`every( )` 方法：方法用于检测数组所有元素是否都符合指定条件（通过函数提供）, 返回一个布尔值, 结果为 true或false。

*   **every()是对数组中每一项运行给定函数，如果该函数对每一项返回true, 则返回true。**
*   **some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。**

```js
var a = [1, 15, 2, 9, 11, 23];
var evens = a.some((value, index, ar) => value % 2 == 0)
var evens2 = a.every((value, index, ar) => value % 2 == 0)
console.log(evens); //ture
console.log(evens2); //false
```

### reduce（）

语法：
reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)
*   `previousValue`：上一次调用 `callbackFn` 时的返回值。在第一次调用时，若指定了初始值 `initialValue`，其值则为 `initialValue`，否则为数组索引为 0 的元素 `array[0]`。
*   `currentValue`：数组中正在处理的元素。在第一次调用时，若指定了初始值 `initialValue`，其值则为数组索引为 0 的元素 `array[0]`，否则为 `array[1]`。
*   `currentIndex`：数组中正在处理的元素的索引。若指定了初始值 `initialValue`，则起始索引号为 0，否则从索引 1 起始。
*   `array`：用于遍历的数组。

`reduce( )` 方法：reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce(function(prev, cur, index, arr) {
  console.log(prev, cur, index);
  return prev + cur;
})
console.log(arr);
console.log(sum);
```

#### 记录某个元素在数组中出现了几次

```js
let arr = ['name', 'age', 'long', 'short', 'long', 'name', 'name']

let arrResult1 = arr.reduce((pre, cur) => {
  console.log(pre, cur)
  if (cur in pre) {
    pre[cur]++
  } else {
    pre[cur] = 1
  }
  return pre
}, {})

console.log(arrResult1) //结果：{name: 3, age: 1, long: 2, short: 1}
```

#### 数组去重

```js
let arr = ['name', 'age', 'long', 'short', 'long', 'name', 'name']

let arrResult2 = arr.reduce((pre, cur) => {
  if (!pre.includes(cur)) {
    pre.push(cur)
  }
  return pre
}, [])

console.log(arrResult2) //结果：[ 'name', 'age', 'long', 'short' ]
```

在ES6的时代，有个非常快速且简单的方法，使用 `new Set()` 以及 `Array.from()` 或者 `展开运算符(...)`

```js
var fruits = [“banana”, “apple”, “orange”, “watermelon”, “apple”, “orange”, “grape”, “apple”];

// 方法一
var uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
// 方法二
var uniqueFruits2 = […new Set(fruits)];
console.log(uniqueFruits2); // returns [“banana”, “apple”, “orange”, “watermelon”, “grape”]
```

#### 将多维数组转化为一维

```js
let arr = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]]
]
const newArr = function(arr) {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```

#### 对象中的属性求和

```js
var result = [{
    name: '王二',
    age: 10
  },
  {
    name: '张三',
    age: 20
  },
  {
    name: ' 李四',
    age: 30
  }
];

var sum = result.reduce(function(prev, cur) {
  return cur.age + prev;
}, 0);
console.log(sum) //60
```

## ES6新增的数组方法

### for...of

`for...of` 是es6推出的迭代器，号称最简洁，可以是用 `break` ， `continue` 和 `return` 终止循环。跟 `.forEach()` 不同的是，不提供数组索引。跟 `for` 语句相比代码少得多，更简洁。

下面代码遍历输出数组，如下：

```js
var arr = ['nick', 'freddy', 'mike', 'james'];
for (var item of arr) {
  console.log(item);
}
```

<!--

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a106004df4ea4a6c9392a0c81ab13a62~tplv-k3u1fbpfcp-watermark.image?)

 -->

### for...in

这个方法跟上面的 `for...of` 语法上看起来相似， `for...of` 是对值的遍历， `for...in` 是对 `key/index` 的遍历。 `for...in` 应用于数组则 key 对应的就是数组的索引值，应用于对象则 `key` 对应键值。

来看代码执行效果，先应用于数组，如下：

```js
obj = {
  a: 1,
  b: 2,
  c: 3
}
for (let key in obj) {
  console.log(key)
  console.log(obj[key])
}
```

<!--

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/98ce2ecf891640d09a0dbe984ae3c52b~tplv-k3u1fbpfcp-watermark.image?)

 -->

#### 对比

```js
var arr = ['nick', 'freddy', 'mike', 'james'];
for (var key in arr) {
  console.log(key);
}
console.log('-----------分割线-----------');
for (var item of arr) {
  console.log(item);
}
```

<!-- 

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13ae46fdd86349b3af3e6a5b067da670~tplv-k3u1fbpfcp-watermark.image?)

 -->

### Array.from( )

语法：Array.from(arrayLike[, mapFn[, thisArg]])

Array.from( ) 方法：将类数组对象或可迭代对象转化为数组，比如arguments，js选择器找到dom集合和对象模拟的数组。

```js
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]
// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]
```

#### 遍历数组

平时我们使用最多的就是数组的 `.map` 方法，其实还有一个方法也能达到一样的目的，用法比较冷门，所以我们总是忽视，那就是 `Array.from`

```js
var friends = [{
    name: ‘John’,
    age: 22
  },
  {
    name: ‘Peter’,
    age: 23
  },
  {
    name: ‘Mark’,
    age: 24
  },
  {
    name: ‘Maria’,
    age: 22
  },
  {
    name: ‘Monica’,
    age: 21
  },
  {
    name: ‘Martha’,
    age: 19
  },
]

var friendsNames = Array.from(friends, ({
  name
}) => name);
console.log(friendsNames); // returns [“John”, “Peter”, “Mark”, “Maria”, “Monica”, “Martha”]
```

### Array.of( )

`Array.of( ) ` 方法：数组创建，将参数中所有值作为元素形成数组，如果参数为空，则返回一个空数组。

```js
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// 参数值可为不同类型
console.log(Array.of(1, '2', true)); // [1, '2', true]
// 参数为空时返回空数组
console.log(Array.of()); // []
```

### find( )

`find( )` 方法：查找数组中符合条件的元素, 若有多个符合条件的元素，则返回第一个元素。

```js
let arr = Array.of(1, 2, 3, 4);
console.log(arr.find(item => item > 2)); // 3
// 数组空位处理为 undefined
console.log([, 1].find(n => true)); // undefined
```

### findIndex( )

查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

```js
let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item == 1)); // 0
// 数组空位处理为 undefined
console.log([, 1].findIndex(n => true)); //0
```

### includes( )

`includes( )` 方法：检测数组中是否包含一个值。

注意：与 Set 和 Map 的 has 方法区分；Set 的 has 方法用于查找值；Map 的 has 方法用于查找键名。

```js
// 参数1：包含的指定值
[1, 2, 3].includes(1); // true
// 参数2：可选，搜索的起始索引，默认为0
[1, 2, 3].includes(1, 2); // false
// NaN 的包含判断
[1, NaN, 3].includes(NaN); // true
```

### fill( )

`fill( )` 方法：将一定范围索引的数组元素内容填充为单个指定的值。

```js
let arr = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0, 1, 2)); // [1, 0, 3, 4]
```

创建数组的时候，你有没有遇到过需要填充上默认值的场景，你肯定首先想到的就是循环这个数组。ES6提供了更便捷的 `.fill` 方法

```js
var newArray = new Array(10).fill(“1”);
console.log(newArray); // returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]
```

### entries( )

`entries( )` 方法：遍历键值对。(**还未使用过，待了解**)

```js
for (let [key, value] of ['a', 'b'].entries()) {
  console.log(key, value);
}
// 0 "a"
// 1 "b"
// 不使用 for... of 循环
let entries = ['a', 'b'].entries();
console.log(entries.next().value); // [0, "a"]
console.log(entries.next().value); // [1, "b"]

// 数组含空位
console.log([...[, 'a'].entries()]); // [[0, undefined], [1, "a"]]
```

### keys( )

`keys( )` 方法：遍历键名。

```js
for (let key of ['a', 'b'].keys()) {
  console.log(key);
}
// 0
// 1
// 数组含空位
console.log([...[, 'a'].keys()]); // [0, 1]
```

### values( )

`values( )` 方法：遍历键值。

```js
for (let value of ['a', 'b'].values()) {
  console.log(value);
}
// "a"
// "b"
// 数组含空位
console.log([...[, 'a'].values()]); // [undefined, "a"]
```

### flat( )

嵌套数组转一维数组

```js
console.log([1, [2, 3]].flat()); // [1, 2, 3]
// 指定转换的嵌套层数
console.log([1, [2, [3, [4, 5]]]].flat(2)); // [1, 2, 3, [4, 5]]
// 不管嵌套多少层
console.log([1, [2, [3, [4, 5]]]].flat(Infinity)); // [1, 2, 3, 4, 5]
// 自动跳过空位
console.log([1, [2, , 3]].flat()); // [1, 2, 3]
```

### 复制数组

`…` ：扩展运算符

```js
let arr = [1, 2],
  arr1 = [...arr];
console.log(arr1); // [1, 2]

// 数组含空位
let arr2 = [1, , 3],
  arr3 = [...arr2];
console.log(arr3);
[1, undefined, 3]
//合并数组
console.log([...[1, 2], ...[3, 4]]); // [1, 2, 3, 4]
```
