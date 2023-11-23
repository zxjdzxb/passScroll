# JavaScript

## JS 的数据类型有哪些？

::: details
纯记忆题，答案有 8 个词，建议背诵 10 次。

字符串、数字、布尔、undefined、null、大整数、符号、对象

string、number、boolean、undefined、null、bigint、symbol、object
:::

> 提了就零分的答案有：数组、函数、日期。这些是类 class，不是类型 type

## 数据类型检测的方式有哪些

::: details
1. typeof 操作符

```JS
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof 'str'); // string
console.log(typeof []); // object
console.log(typeof
  function() {}); // function
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

2.instanceof 操作符

```JS
const arr = [];
arr instanceof Array; // true

const obj = {};
obj instanceof Object; // true

function Person() {}
const person = new Person();
person instanceof Person; // true
```

3. Object.prototype.toString.call()

```JS
Object.prototype.toString.call(42); // "[object Number]"
Object.prototype.toString.call("hello"); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function() {}); // "[object Function]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
```

:::

## 判断数组的方式有哪些

::: details
1. Array.isArray()

```JS
Array.isArray([]); // true
Array.isArray({}); // false
```

2. 原型链做判断

```JS
obj.__proto__ === Array.prototype;
```

:::
 ## null和undefined区别
::: details
1. null 是一个关键字，表示一个空值或者不存在的对象。
2. undefined 是表示未初始化的变量或者对象中不存在的属性值。
3. null 可以被显式赋值给一个变量，而 undefined 是 JavaScript 中的初始默认值。
4. 检查一个变量是否为 null 或 undefined 时，最好使用严格相等运算符 === 进行比较，因为它们是不同的值。

```JS
null === undefined; // false
null == undefined; // true (在使用双等号时，null 和 undefined 是相等的)
```

:::

## intanceof 操作符的实现原理及实现

::: details
1. 首先，获取 obj 的原型，使用 Object.getPrototypeOf(obj) 或者 obj.__proto__。
2. 获取构造函数的原型，即 Constructor.prototype。
3. 检查 obj 的原型链上是否存在构造函数的原型。如果在原型链上找到了构造函数的原型，那么返回 true；否则返回 false。

```JS
function myInstanceof(obj, Constructor) {
  // 获取 obj 的原型
  let proto = Object.getPrototypeOf(obj);

  // 获取构造函数的原型
  let prototype = Constructor.prototype;

  // 沿着原型链向上查找，直到 proto 为 null（即到达原型链的顶部）
  while (proto !== null) {
    // 如果找到了构造函数的原型，则返回 true
    if (proto === prototype) {
      return true;
    }
    // 否则继续向上查找原型链
    proto = Object.getPrototypeOf(proto);
  }

  // 如果在原型链上都没找到构造函数的原型，则返回 false
  return false;
}
```

:::

## 为什么0.1+0.2 ! == 0.3，如何让其相等

::: details
在 JavaScript 中，浮点数的精度问题导致了类似 `0.1 + 0.2 !== 0.3` 这样的情况。这是因为浮点数在计算机中是以二进制表示的，并且有时候无法精确地表示十进制小数，会存在精度损失。

`解决这个问题有几种方法` ：

### 1. 使用 `toFixed()` 方法：

```javascript
const result = 0.1 + 0.2;
const formattedResult = parseFloat(result.toFixed(10)); // 控制小数位数为10
console.log(formattedResult); // 0.3
console.log(formattedResult === 0.3); // true
```

### 2. 使用数学库：

可以使用像 `decimal.js` 或者 `big.js` 这样的数学库，这些库提供了更精确的浮点数计算方法。

### 3. 自定义函数处理精度：

可以自行编写函数来处理浮点数的精度问题，比如：

```javascript
function add(a, b, precision = 10) {
  const multiplier = Math.pow(10, precision);
  return Math.round((a + b) * multiplier) / multiplier;
}

const result = add(0.1, 0.2);
console.log(result); // 0.3
console.log(result === 0.3); // true
```

这些方法都是为了控制浮点数的精度，使得计算结果更加准确。
:::

## Object.is() 与比较操作符 ===、== 的区别？

::: details
`Object.is()` 是 JavaScript 中用于比较两个值是否相等的方法，而 `===` 和 `==` 是比较操作符，也用于比较两个值是否相等。它们之间有一些区别：

### 1. `===` (严格相等)

`===` 是 JavaScript 中的严格相等比较操作符。它会比较两个值的类型和值，并且只有在类型和值都相同时才会返回 `true` ，否则返回 `false` 。它不会进行类型转换。

### 2. `==` (非严格相等)

`==` 是 JavaScript 中的相等比较操作符。它会在比较之前尝试进行类型转换，然后再比较值。它会尝试将两个值转换为相同的类型，然后再进行比较。这可能会导致一些隐式的类型转换，并且可能会产生一些意想不到的结果。

### 3. `Object.is()`

`Object.is()` 是一个严格相等比较的方法，类似于 `===` ，但它对于 NaN 和 +0/-0 有一些特殊的行为。
* 对于 +0 和 -0，`Object.is(+0, -0)` 返回 `false`，而 `===` 比较时会返回 `true`。
* 对于 NaN，`Object.is(NaN, NaN)` 返回 `true`，而 `===` 比较时会返回 `false`。

```javascript
Object.is(+0, -0); // false
+
0 === -0; // true

Object.is(NaN, NaN); // true
NaN === NaN; // false
```

`Object.is()` 被设计为更严格的相等比较，特别处理了一些 JavaScript 中存在的奇异行为，比如 NaN 和 +0/-0 的比较。
:::

## 原型链是什么？

::: details
*   原型：每一个 JavaScript 对象（null 除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性，其实就是 `prototype` 对象。\
假设我们有一个数组对象 `a=[]` ，这个 `a` 也会有一个隐藏属性，叫做_proto_这个属性会指向 `Array.prototype`

```
var a = [];
a.__proto__ ===  Array.prototype;
// 用 b表示 Array.prototype
b._proto_ === Object.prototype
```

于是就通过隐藏属性 `__proto__` 形成了一个链条：

```
a ===> Array.prototype ===> Object.prototype
```

这就是原型链。
**怎么做：**

看起来只要改写 b 的隐藏属性 `__proto__` 就可以改变 b的原型（链）

```
const x = Object.create(原型)
// 或
const x = new 构造函数() // 会导致 x.__?????__ === 构造函数.prototype
```

这样一来，a 就既拥有 Array.prototype 里的属性，又拥有 Object.prototype 里的属性。
**解决了什么问题：**

在没有 Class 的情况下实现「继承」。以 `a ===> Array.prototype ===> Object.prototype` 为例，我们说：

1.  a 是 Array 的实例，a 拥有 Array.prototype 里的属性

<!---->

2.  Array 继承了 Object（注意专业术语的使用）

<!---->

3.  a 是 Object 的间接实例，a 拥有 Object.prototype 里的属性

**优点：**

简单、优雅。

**缺点：**

跟 class 相比，不支持私有属性。

**怎么解决缺点：**

使用 class 呗。但 class 是 ES6 引入的，不被旧 IE 浏览器支持。

> 建议熟读这篇文章：

[JS 中 __proto__ 和 prototype 存在的意义是什么？](https://www.zhihu.com/question/56770432/answer/315342130)
:::

## 闭包 :star:

::: details
闭包（Closure）是指函数和其周围的状态（lexical environment，词法环境）的组合。它包含了两部分：

1. **函数：** 闭包是一个函数。
2. **环境：** 闭包是这个函数被创建时所处的词法环境。这个环境中包含了函数被创建时的所有局部变量。

### 关键概念：

闭包是指那些能够访问自由变量的函数, 一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。

### 闭包的用途：

1. **创建私有变量：** 可以通过闭包来创建私有变量，只有在闭包内部定义的函数才能访问和修改这些变量。

2. **延长变量生命周期：** 闭包可以使变量的生命周期得到延长，即使外部函数执行完毕，闭包仍然可以访问外部函数中的变量。

### 示例：

```javascript
function outerFunction() {
  let outerVar = 'I am outer';

  function innerFunction() {
    console.log(outerVar); // 可以访问外部函数中的 outerVar 变量
  }

  return innerFunction;
}

const closureFunc = outerFunction();
closureFunc(); // 输出：I am outer
```

在这个例子中， `innerFunction` 就是一个闭包，它可以访问外部函数 `outerFunction` 中的 `outerVar` 变量，即使 `outerFunction` 已经执行完毕。闭包的特性使得内部函数仍然可以访问其词法作用域中的变量，从而形成了闭包。
:::

## 深拷贝（Deep Copy）和浅拷贝（Shallow Copy）

是在复制对象或数组时所采用的两种不同方法，它们对于复制嵌套对象或数组的方式不同。

::: details

### 浅拷贝（Shallow Copy）：

浅拷贝会创建一个新的对象或数组，并复制原始对象或数组的基本数据结构，但是对于嵌套的对象或数组，它们只会复制引用，而不是创建全新的对象或数组。

```javascript
// 浅拷贝示例
const originalObject = {
  a: 1,
  b: {
    c: 2
  }
};
const shallowCopy = Object.assign({}, originalObject);

// 修改原始对象中的嵌套对象
originalObject.b.c = 3;

console.log(shallowCopy.b.c); // 输出: 3（因为嵌套对象是引用复制，所以修改了原始对象也会影响浅拷贝的对象）
```

### 深拷贝（Deep Copy）：

深拷贝会创建一个全新的对象或数组，不仅复制原始对象或数组的基本数据结构，还会递归复制所有的嵌套对象或数组，确保每个对象都是全新的。

```javascript
// 深拷贝示例
const originalObject = {
  a: 1,
  b: {
    c: 2
  }
};
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// 修改原始对象中的嵌套对象
originalObject.b.c = 3;

console.log(deepCopy.b.c); // 输出: 2（因为进行了深拷贝，所以修改原始对象不会影响深拷贝的对象）
```

### 总结：

* 浅拷贝只复制基本数据结构和引用，而不会递归复制嵌套对象或数组。
* 深拷贝会递归复制所有的对象和数组，确保每个对象都是全新的。然而，使用 `JSON.parse(JSON.stringify(object))` 进行深拷贝时，可能会忽略一些特殊类型的数据（如函数、正则表达式、循环引用等），因此需要谨慎使用。

:::

## 谈谈 This 对象的理解。

::: details
this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模
式来判断。
1. 第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

2. 第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。

3. 第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

4. 第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

:::

## 说一说call apply bind的作用和区别？

::: details
`call` 、 `apply` 和 `bind` 都是用来改变函数执行时的上下文（即 `this` 的指向）的方法，它们的作用和区别如下：

### `call` 方法：

* **作用：** `call` 方法立即调用函数，并传入指定的 `this` 值和若干个参数。
* **语法：** `function.call(thisArg, arg1, arg2, ...)`
* **参数：**
  + `thisArg`：函数执行时 `this` 所指向的对象。
  + `arg1, arg2, ...`：传递给函数的参数列表。

### `apply` 方法：

* **作用：** `apply` 方法立即调用函数，并传入指定的 `this` 值和一个参数数组。
* **语法：** `function.apply(thisArg, [argsArray])`
* **参数：**
  + `thisArg`：函数执行时 `this` 所指向的对象。
  + `[argsArray]`：一个数组或类数组对象，包含传递给函数的参数列表。

### `bind` 方法：

* **作用：** `bind` 方法创建一个新函数，永久绑定指定的 `this` 值，并在调用时传递若干个参数。
* **语法：** `function.bind(thisArg[, arg1[, arg2[, ...]]])`
* **参数：**
  + `thisArg`：函数执行时 `this` 所指向的对象。
  + `arg1, arg2, ...`：函数调用时传递的参数列表。

### 区别：

1. **参数传递方式：**
   - `call` 方法的参数是一个一个传递的，而 `apply` 方法的参数是作为一个数组传递的。
   - `bind` 方法的参数也是一个一个传递的，但它是创建一个新函数，不会立即执行，而是返回一个绑定了指定 `this` 值和部分参数的函数。

2. **立即执行与延迟执行：**
   - `call` 和 `apply` 方法会立即执行函数。
   - `bind` 方法不会立即执行函数，而是返回一个新函数，需要再次调用该函数才会执行。

3. **返回值：**
   - `call` 和 `apply` 方法会立即执行函数，并返回函数执行的结果。
   - `bind` 方法返回一个新函数，不会立即执行函数，返回的是对原函数的引用。

这些方法都允许你在调用函数时显式指定函数内部 `this` 的指向，对于在特定上下文中执行函数或绑定函数的上下文非常有用。
:::

## 浏览器的垃圾回收机制

::: details
浏览器的垃圾回收机制是为了管理内存的分配和释放，以确保不再被使用的内存能够被释放，避免内存泄漏和资源浪费。浏览器中的垃圾回收机制通常包括以下几个部分：

### 1. 标记-清除算法（Mark and Sweep）：

这是一种常见的垃圾回收算法，主要分为两个阶段：

* **标记阶段：** 垃圾回收器会从根对象开始遍历所有对象，标记所有能够被直接或间接访问到的对象。根对象可以是全局对象、正在执行的函数的局部变量和闭包等。

* **清除阶段：** 垃圾回收器会清除所有没有被标记的对象，释放它们所占用的内存。这些未被标记的对象被视为不再被使用，可以被安全地回收。

### 2. 引用计数（Reference Counting）：

这种算法会对每个对象进行引用计数，当一个对象被引用时计数加一，当引用它的变量被销毁或者重新赋值时计数减一。当对象的引用计数为零时，就意味着该对象不再被引用，可以被回收。

### JavaScript 中的垃圾回收机制：

* **自动垃圾回收：** JavaScript 具有自动垃圾回收机制，它负责在后台周期性地监视内存的分配和释放。现代浏览器采用了高效的垃圾回收机制，比如 V8 引擎中的垃圾回收算法会根据需要动态地优化内存管理。

* **内存管理：** JavaScript 的垃圾回收器会自动监视不再使用的对象，并在适当的时候回收它们。使用不当可能导致内存泄漏，例如创建全局变量或未使用的对象占用过多内存等情况。

### 内存泄漏：

内存泄漏是指程序中的某块内存被错误地持续占用，即使它不再需要了，也没有被及时释放。在 JavaScript 中，常见的内存泄漏情况包括未释放的闭包、未清理的定时器、循环引用等。因此，在编写 JavaScript 代码时，需要注意内存管理，避免出现潜在的内存泄漏问题。
:::

# ES6

## var、let和const的区别

::: details
在 JavaScript 中， `var` 、 `let` 和 `const` 都是用来声明变量的关键字，但它们有一些区别：

### var:

* **函数作用域：** 在 ES5 及之前的版本中，`var` 声明的变量是函数作用域的，即在函数内部声明的变量在函数外部也可以访问到。
* **变量提升：** 使用 `var` 声明的变量会发生变量提升，即在代码执行前会将变量声明提升至当前作用域的顶部。但赋值操作并不会提升，赋值操作仍然在原始位置执行。
* **可以被重复声明：** 可以重复使用 `var` 声明同名变量而不会报错。

```javascript
var x = 10;
var x = 20; // 合法
```

### let:

* **块级作用域：** 在 ES6 及之后的版本中，`let` 声明的变量是块级作用域的，只在 `{}` 内部有效，不会发生变量提升。
* **不可重复声明：** 同一作用域下不允许重复声明同名变量，否则会报错。
* **可修改值：** 声明后的变量值可以修改。

```javascript
let y = 10;
let y = 20; // 报错，不允许重复声明同名变量
y = 30; // 合法，可以修改变量值
```

### const:

* **块级作用域：** 声明常量的作用域同 `let`，也是块级作用域，只在 `{}` 内部有效。
* **声明后不可再赋值：** `const` 声明的变量必须进行初始化赋值，并且声明后不可再次赋值。
* **不可重复声明：** 与 `let` 类似，同一作用域下不允许重复声明同名常量，否则会报错。

```javascript
const z = 10;
z = 20; // 报错，不可重新赋值
```

通常建议尽量使用 `const` 声明变量，如果变量需要修改，则使用 `let` 。避免使用 `var` ，因为它有变量提升和函数作用域的特性，容易引发一些问题。
:::

## const对象的属性可以修改吗

::: details
1. const保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。
2. 但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。
:::

## **箭头函数**

::: details
*   **简洁的语法形式**：箭头函数使用了更简洁的语法形式，省略了传统函数声明中的`function`关键字和大括号。它通常可以在更少的代码行数中表达相同的逻辑。

*   **没有自己的this**：箭头函数没有自己的`this`绑定，它会捕获所在上下文的`this`值。这意味着箭头函数中的`this`与其定义时所在的上下文中的`this`保持一致，而不是在函数被调用时动态绑定。这可以避免传统函数中常见的`this`指向问题，简化了对`this`的使用和理解。

*   **没有`arguments`对象**：箭头函数也没有自己的`arguments`对象。如果需要访问函数的参数，可以使用剩余参数（Rest Parameters）或使用展开运算符（Spread Operator）将参数传递给其他函数。

*   **箭头函数没有prototype** 无法作为构造函数：箭头函数不能用作构造函数，不能使用`new`关键字调用。它们没有`prototype`属性，因此无法使用`new`关键字创建实例。

*   **隐式的返回值**：如果箭头函数的函数体只有一条表达式，并且不需要额外的处理逻辑，那么可以省略大括号并且该表达式将隐式作为返回值返回。

:::

## **模板字符串**

允许使用反引号（\`）创建多行字符串和插入变量。

::: details

```JS
const name = 'Alice';
const age = 30;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
// 输出：Hello, my name is Alice and I am 30 years old.
```

:::

## **解构赋值**

可以从数组或对象中快速提取值并赋给变量。

::: details
解构赋值是一种在 JavaScript 中从数组或对象中提取数据并赋值给变量的语法。它让你能够快速地从复杂的数据结构中提取所需的值，然后赋值给变量。

### 数组解构赋值：

通过将变量括在方括号内，可以从数组中提取对应位置的值并赋给这些变量。

```javascript
const numbers = [1, 2, 3];

// 从数组中提取值并赋给变量
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

### 对象解构赋值：

通过将变量括在花括号内，可以从对象中提取属性值并赋给这些变量，变量名需和对象的属性名匹配。

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

// 从对象中提取属性值并赋给变量
const {
  firstName,
  lastName,
  age
} = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'
console.log(age); // 30
```

### 嵌套解构赋值：

可以在解构模式中使用嵌套结构，以提取嵌套的数组或对象中的值。

```javascript
const data = {
  user: 'Alice',
  details: {
    age: 30,
    country: 'USA',
  },
};

// 嵌套解构赋值
const {
  user,
  details: {
    age,
    country
  }
} = data;

console.log(user); // 'Alice'
console.log(age); // 30
console.log(country); // 'USA'
```

解构赋值使得从复杂数据结构中提取数据变得简单和方便，提高了代码的可读性和易用性。
:::

## **默认参数**

在函数声明时可以设置参数的默认值。

::: details
在解构赋值时可以给变量设置默认值，防止提取的值为 `undefined` 时出现问题。

```javascript
const numbers = [1, 2];

// 设置默认值
const [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

:::

## **扩展运算符**

用于将数组或对象展开为独立的元素。

::: details
在 JavaScript 中，扩展运算符（Spread Operator）用三个点 `...` 表示，它可以将一个可迭代对象（比如数组、字符串或对象等）展开为多个元素。它可以用于函数调用、数组字面量、对象字面量等地方。

### 1. 在数组字面量中使用扩展运算符：

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```

### 2. 在函数调用中使用扩展运算符：

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

const result = sum(...numbers);
console.log(result); // 6
```

### 3. 拷贝数组：

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]
```

### 4. 合并对象：

```javascript
const obj1 = {
  a: 1,
  b: 2
};
const obj2 = {
  c: 3,
  ...obj1
};

console.log(obj2); // { c: 3, a: 1, b: 2 }
```

### 5. 获取剩余元素（Rest 参数）：

在函数参数中使用扩展运算符可以将剩余的参数收集到一个数组中。

```javascript
function myFunc(a, b, ...rest) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(rest); // [3, 4, 5]
}

myFunc(1, 2, 3, 4, 5);
```

扩展运算符提供了一种简洁而强大的方式来操作数组、对象和函数参数，它在许多情况下都能简化代码并提高代码的可读性。
:::

## **模块化（Modules）**

通过import和export语句实现模块的导入和导出。

::: details
导出模块：
使用 export 关键字将变量、函数或类导出为一个模块。

```JS
// math.js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

导入模块：
使用 import 关键字导入模块中的内容。

```JS
// app.js
import {
  sum,
  multiply
} from './math.js';

console.log(sum(1, 2)); // 3
console.log(multiply(2, 3)); // 6
```

:::

## Promise

Promise 是一种更为现代化、更具表现力的异步编程方式，它解决了传统回调函数中的一些问题，使得异步代码更易于理解和维护。Promise 不仅简化了异步操作的处理，还提供了一种更规范、更可靠的方式来处理异步任务的完成或失败。同时，它也为 `async/await` 这样更高级的异步编程工具提供了基础。
::: details

### 基本概念：

1. **状态（States）：** Promise 有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。状态一旦改变，就不会再变。

2. **状态转换：**
   - 从 pending 到 fulfilled：调用 `resolve()` 方法表示操作成功完成。
   - 从 pending 到 rejected：调用 `reject()` 方法表示操作失败。

3. **链式调用（Chaining）：** 可以使用 `.then()` 方法将多个 Promise 链接在一起，以处理多个异步操作的顺序和结果。

### Promise 的基本语法：

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }
  }, 1000);
});

myPromise.then(
  result => {
    console.log('Success:', result);
  },
  error => {
    console.log('Error:', error);
  }
);
```

### Promise 的优势：

1. **解决回调地狱（Callback Hell）：** Promise 可以链式调用，使得异步操作的代码更清晰和易读。

 `回调地狱就是嵌套回调问题，具体来说就是异步返回值又依赖于另一个异步返回值`

2. **更好的错误处理：** `.catch()` 方法可以捕获 Promise 链中的任何错误，便于统一处理异常情况。

### Promise API

*   `Promise.all()`：中的Promise序列会全部执行通过才认为是成功，否则认为是失败；

*   `Promise.race()`：中的Promise序列中第一个执行完毕的是通过，则认为成功，如果第一个执行完毕的Promise是拒绝，则认为失败；

*   `Promise.any()`：中的Promise序列只要有一个执行通过，则认为成功，如果全部拒绝，则认为失败；

*   `Promise.allSettled()`：是一个用于处理多个 Promise 对象的方法，并且会返回一个包含每个 Promise 对象的解决状态的数组；

*   `Promise.resolve()`：会返回一个新的 Promise 实例，该实例的状态为`fulfilled`。

*   `Promise.reject()`：也会返回一个新的 Promise 实例，该实例的状态为`rejected`

:::

## Proxy

::: details
`Proxy` 是 ES6 中引入的一种强大的元编程特性，它允许你创建一个代理对象来拦截和定制对象的基本操作，例如属性访问、赋值、删除等操作。通过代理，你可以在对象的操作过程中插入自定义行为，以控制对象的访问和修改。

### 基本语法：

```javascript
const proxy = new Proxy(target, handler);
```

* `target`：被代理的目标对象。
* `handler`：一个对象，包含了拦截目标对象操作的方法。这些方法称为 "拦截器" 或 "陷阱"。

### 主要拦截器方法（Handler Methods）：

1. **`get(target, property, receiver)`：** 拦截对象属性的读取操作。
2. **`set(target, property, value, receiver)`：** 拦截对象属性的设置操作。
3. **`deleteProperty(target, property)`：** 拦截对象属性的删除操作。
4. **`apply(target, thisArg, argumentsList)`：** 拦截函数的调用。
5. **`construct(target, argumentsList, newTarget)`：** 拦截 `new` 操作符，用于构造函数的调用。
6. **`...`**：还有其他一些拦截器方法，用于拦截不同的操作。

### 使用场景：

1. **数据验证和拦截：** 可以拦截对对象属性的访问，进行数据验证，例如防止属性的非法修改。

2. **日志记录和性能分析：** 可以通过拦截器方法记录对象属性的访问和修改，用于日志记录或性能分析。

3. **对象代理和增强：** 可以对对象的操作进行定制，为对象添加额外的功能或行为。

4. **模拟虚拟对象：** 可以通过代理模拟出一些不存在的属性或对象，用于实现一些特定的业务逻辑。

5. **数据绑定和响应式编程：** 在 Vue、React 等框架中，可以利用 Proxy 实现数据的响应式处理。

6. **防止对象属性被枚举：** 通过 Proxy 可以隐藏对象的某些属性，避免被枚举。

`Proxy` 的强大之处在于它提供了一种灵活且可定制的方式来控制对象的操作，可以根据业务需求来定义对象的行为，使得 JavaScript 中的对象操作更加灵活和可控。
:::

## 其他常用ES6 API

* Set和Map：提供了集合和字典数据结构，分别对应Set和Map对象。
* Symbol：引入了一种新的原始数据类型，用于创建唯一的标识符。
