# 手写题

## 手写节流，防抖

::: details
当需要在事件频繁触发时对函数进行控制，节流（throttle）和防抖（debounce）是两种常见的优化性能的方法。

### 节流（Throttle）：

节流函数可以确保在一定时间间隔内只执行一次函数, 类似技能CD。

```javascript
function throttle(func, delay) {
  let timer;
  return function(...args) {
    if (!timer) {
      func.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
```

使用例子：

```javascript
function handleThrottledInput(e) {
  console.log(e.target.value);
}

const throttledInput = throttle(handleThrottledInput, 300);
document.getElementById('input').addEventListener('input', throttledInput);
```

### 防抖（Debounce）：

防抖是在多次点击中，只执行最后一次，前面的点击都会被取消，回城。

```javascript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

使用例子：

```javascript
function handleDebouncedInput(e) {
  console.log(e.target.value);
}

const debouncedInput = debounce(handleDebouncedInput, 300);
document.getElementById('input').addEventListener('input', debouncedInput);
```

这两种方法都可以用来限制函数的执行频率，节流和防抖的选择取决于具体的使用场景，节流适合需要在间隔一定时间执行的情况，而防抖适合需要等待事件停止一定时间后再执行的情况。
:::

## 手写new操作符

::: details
`new` 操作符用于创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。下面是一个简单的模拟 `new` 操作符的实现：

```javascript
function myNew(constructor, ...args) {
  // 创建一个空对象，并将其原型指向构造函数的原型对象
  const obj = Object.create(constructor.prototype);

  // 调用构造函数，并将 this 绑定到新创建的对象上
  const instance = constructor.apply(obj, args);

  // 如果构造函数返回的是一个对象，则返回这个对象；否则返回新创建的对象
  return instance instanceof Object ? instance : obj;
}
```

使用例子：

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
};

const john = myNew(Person, 'John', 30);
john.sayHello(); // Output: Hello, I'm John and I'm 30 years old.
```

这段代码简单地模拟了 `new` 操作符的过程：创建一个新对象并将其原型指向构造函数的原型对象，然后调用构造函数并将 `this` 绑定到新对象上，最后返回新对象或构造函数返回的对象。
:::

## 手写 AJAX

::: details
当使用原生 JavaScript 进行 AJAX 请求时，可以通过 `XMLHttpRequest` 对象实现：

```javascript
function ajax(url, method, data, successCallback, errorCallback) {
  //1.创建XMLHttpRequest对象,创建一个异步调用对象.
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // 请求成功，调用成功回调函数，并传递响应数据
        successCallback(xhr.responseText);
      } else {
        // 请求失败，调用失败回调函数
        errorCallback(xhr.status);
      }
    }
  };

  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求头
  xhr.send(JSON.stringify(data)); // 发送请求，将数据转换为 JSON 字符串格式
}
```

使用示例：

```javascript
// GET 请求示例
ajax(
  'https://jsonplaceholder.typicode.com/posts/1',
  'GET',
  null,
  function(response) {
    console.log('GET request successful:', JSON.parse(response));
  },
  function(error) {
    console.error('Error occurred:', error);
  }
);

// POST 请求示例
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};
ajax(
  'https://jsonplaceholder.typicode.com/posts',
  'POST',
  postData,
  function(response) {
    console.log('POST request successful:', JSON.parse(response));
  },
  function(error) {
    console.error('Error occurred:', error);
  }
);
```

请注意，这只是一个基本的 AJAX 请求示例。在实际项目中，可能需要考虑更多的请求参数、错误处理、安全性等方面的问题。对于现代的 Web 开发，通常也会使用 `fetch` API 或者基于 Promise 封装的库（如 Axios）来执行 AJAX 请求，它们提供了更简洁、灵活和可靠的方式来处理网络请求。
:::

## 实现深拷贝

::: details
实现一个深拷贝函数，可以处理对象及其嵌套的属性和子对象，可以通过递归方式实现：

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // 如果是原始类型或 null，则直接返回
  }

  let clone = Array.isArray(obj) ? [] : {}; // 根据类型创建一个新对象或数组

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]); // 递归调用深拷贝函数复制子对象
    }
  }

  return clone;
}
```

使用示例：

```javascript
const originalObj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: [4, 5, {
    g: 6
  }],
};

const clonedObj = deepClone(originalObj);
console.log(clonedObj);
```

此函数可以对对象进行深度复制，但请注意，对于特殊的对象，比如含有函数、正则表达式、Symbol 等特殊属性的对象，在深拷贝过程中可能会丢失其特殊性。对于大型的对象和循环引用的对象，这种深拷贝方式也需要小心处理，以免造成性能问题或内存泄漏。在一些情况下，使用第三方库（比如 Lodash 的 `_.cloneDeep` ）可能更可靠、更全面地处理这些边缘情况。
:::

## 手写数组去重

::: details
可以使用多种方法实现数组去重，以下是其中一种常见的方法，利用 Set 或对象来实现：

### 使用 Set 实现数组去重：

```javascript
function uniqueArray(arr) {
  return Array.from(new Set(arr));
}
```

### 使用对象实现数组去重：

```javascript
function uniqueArray(arr) {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}
```

使用示例：

```javascript
const arr = [1, 2, 2, 3, 3, 4, 5, 5];
const unique = uniqueArray(arr);
console.log(unique); // Output: [1, 2, 3, 4, 5]
```

这两种方法都可以实现数组去重，利用 Set 的特性或者利用对象的键唯一性来过滤重复元素。值得注意的是，利用对象来实现去重可能会丢失原数组的顺序，因为对象的键是无序的。
:::

## 实现数组扁平化

::: details
数组扁平化可以将多维数组转换为一维数组。以下是一种递归方式来实现数组扁平化：

```javascript
function flattenArray(arr) {
  let result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // 递归调用扁平化函数
    } else {
      result.push(item);
    }
  });

  return result;
}
```

使用示例：

```javascript
const arr = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattened = flattenArray(arr);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

这段代码会遍历数组中的每个元素，如果元素是数组，则递归调用自身来扁平化处理，直到数组中不再包含子数组，最终返回一个一维的扁平化数组。
:::

## 实现发布-订阅模式

::: details
发布-订阅模式用于解耦发布者（发布事件的对象）和订阅者（监听事件的对象），允许对象间通过消息来通信，以下是一个简单的发布-订阅模式的实现：

```javascript
class EventBus {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 发布事件
  publish(eventName, data) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach(callback => {
        callback(data);
      });
    }
  }

  // 取消订阅事件
  unsubscribe(eventName, callback) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter(cb => cb !== callback);
    }
  }
}
```

使用示例：

```javascript
const eventBus = new EventBus();

// 订阅事件
eventBus.subscribe('event1', data => {
  console.log('Subscriber 1 received:', data);
});

// 发布事件
eventBus.publish('event1', {
  message: 'Hello!'
});

// 取消订阅事件
const subscriber2 = data => {
  console.log('Subscriber 2 received:', data);
};
eventBus.subscribe('event1', subscriber2);
eventBus.unsubscribe('event1', subscriber2);

// 再次发布事件
eventBus.publish('event1', {
  message: 'How are you?'
});
```

在上述示例中， `EventBus` 类实现了基本的发布、订阅和取消订阅功能。对象可以通过 `subscribe` 方法订阅事件，通过 `publish` 方法发布事件并传递数据，也可以通过 `unsubscribe` 方法取消订阅。
:::

## 使用 setTimeout 实现 setInterval

::: details
可以使用 `setTimeout` 来模拟 `setInterval` 的功能，通过递归调用 `setTimeout` 实现间隔执行某个函数的效果：

```javascript
function mySetInterval(callback, interval) {
  function loop() {
    callback();
    setTimeout(loop, interval); // 递归调用 setTimeout 实现间隔执行
  }

  setTimeout(loop, interval); // 第一次执行
}

// 使用示例
function sayHello() {
  console.log('Hello!');
}

mySetInterval(sayHello, 1000); // 每隔 1 秒输出一次 "Hello!"
```

这段代码通过定义一个 `loop` 函数，利用 `setTimeout` 实现了类似 `setInterval` 的功能。在每次函数执行完后，再次调用 `setTimeout` 来实现循环执行，以达到间隔一定时间执行一次函数的效果。
:::
