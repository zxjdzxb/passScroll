# 手写题

## :star: 手写节流，防抖

::: details
当需要在事件频繁触发时对函数进行控制，节流（throttle）和防抖（debounce）是两种常见的优化性能的方法。

### 节流（Throttle）：

节流函数可以确保在一定时间间隔内只执行一次函数, 类似技能CD。

```javascript
function throttle(func, delay) {
  let timer;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
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

## :star: 手写new操作符

::: details

`new` 操作符用于创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。下面是一个简单的模拟 `new` 操作符的实现：
01. 创建临时对象/新对象
02. 绑定原型
03. 指定 this = 临时对象
04. 执行构造函数
05. 返回临时对象

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

## :star: 手写 AJAX

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

## :star: 实现深拷贝

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

## :star: 手写数组去重

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

```JS
var uniq = function(a) {
  var map = new Map()
  for (let i = 0; i < a.length; i++) {
    let number = a[i] // 1 ~ 3
    if (number === undefined) {
      continue
    }
    if (map.has(number)) {
      continue
    }
    map.set(number, true)

  }
  return [...map.keys()]
}
```

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

## :star: 实现发布-订阅模式

::: details
发布-订阅模式用于解耦发布者（发布事件的对象）和订阅者（监听事件的对象），允许对象间通过消息来通信，以下是一个简单的发布-订阅模式的实现：

```javascript
const eventHub = {
  map: {
    // click: [f1 , f2]
  },
  on: (name, fn) => {
    eventHub.map[name] = eventHub.map[name] || []
    eventHub.map[name].push(fn)
  },
  emit: (name, data) => {
    const q = eventHub.map[name]
    if (!q) return
    q.map(f => f.call(null, data))
    return undefined
  },
  off: (name, fn) => {
    const q = eventHub.map[name]
    if (!q) {
      return
    }
    const index = q.indexOf(fn)
    if (index < 0) {
      return
    }
    q.splice(index, 1)
  }
}

eventHub.on('click', console.log)
eventHub.on('click', console.error)

setTimeout(() => {
  eventHub.emit('click', 'frank')
}, 3000)
```

在上述示例中， `EventBus` 类实现了基本的发布、订阅和取消订阅功能。对象可以通过 `subscribe` 方法订阅事件，通过 `publish` 方法发布事件并传递数据，也可以通过 `unsubscribe` 方法取消订阅。

### class实现

```JS
class EventHub {
  map = {}
  on(name, fn) {
    this.map[name] = this.map[name] || []
    this.map[name].push(fn)
  }
  emit(name, data) {
    const fnList = this.map[name] || []
    fnList.forEach(fn => fn.call(undefined, data))
  }
  off(name, fn) {
    const fnList = this.map[name] || []
    const index = fnList.indexOf(fn)
    if (index < 0) return
    fnList.splice(index, 1)
  }
}
// 使用
const e = new EventHub()
e.on('click', (name) => {
  console.log('hi ' + name)
})
e.on('click', (name) => {
  console.log('hello ' + name)
})
setTimeout(() => {
  e.emit('click', 'frank')
}, 3000)
```

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

## intanceof 操作符的实现原理及实现

::: details
01. 首先，获取 obj 的原型，使用 Object.getPrototypeOf(obj) 或者 obj.__proto__。
02. 获取构造函数的原型，即 Constructor.prototype。
03. 检查 obj 的原型链上是否存在构造函数的原型。如果在原型链上找到了构造函数的原型，那么返回 true；否则返回 false。

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

## :star: 手写Promise

::: details
当手写一个 Promise 的实现时，主要思路如下：

01. **Promise 状态和值的管理：** 创建 Promise 类，包含状态（pending、fulfilled、rejected）、值（resolved value）和原因（rejected reason）等属性。

02. **Executor 函数的执行：** 在 Promise 构造函数中，接收一个执行器函数（executor），该函数接受两个参数 `resolve` 和 `reject`。`resolve` 用于将 Promise 状态从 pending 转变为 fulfilled，而 `reject` 用于将状态从 pending 转变为 rejected。

03. **异步操作的处理：** 考虑执行器函数中可能包含异步操作，因此需要适当使用 `setTimeout` 或其他异步机制来确保正确处理异步任务。

04. **then 方法的实现：** 实现 `then` 方法，该方法接受两个参数，`onFulfilled` 和 `onRejected`，用于处理 Promise 的成功和失败情况。`then` 方法返回一个新的 Promise 对象，实现链式调用。

05. **状态转换和回调执行：** 在 Promise 的状态转变时，执行相应的回调函数。如果状态是 fulfilled，则执行 `onFulfilled` 回调；如果状态是 rejected，则执行 `onRejected` 回调。

06. **链式调用的处理：** 确保 `then` 方法返回一个新的 Promise，以支持链式调用。在链式调用中，对于返回值的处理要符合 Promise 规范，包括将值进行递归解析，以确保正确传递。

07. **catch 方法的实现：** 实现 `catch` 方法，用于捕获 Promise 链中的错误。`catch` 实际上就是 `then(null, onRejected)`。

08. **resolvePromise 函数的实现：** 由于 `then` 方法中可能返回的是一个普通值或一个 Promise，需要实现 `resolvePromise` 函数来处理这种情况。`resolvePromise` 负责递归处理返回值，确保正确的状态传递。

09. **Chaining Cycle 检测：** 在 `resolvePromise` 中需要注意检测链式调用中的循环引用（Chaining Cycle），防止造成死循环。

10. **Promise 的链式调用：** 实现 Promise 的链式调用，确保在每个 `then` 或 `catch` 方法中都能正确处理回调和状态转换。

这是一个简单版的 Promise 实现思路，实际上，Promise 还涉及到一系列规范和细节，因此在实际实现时需要参考 Promise/A+ 规范。

```JS
// 1.用类创建Promise，类中需要有个执行器executor
// 2.执行者中发生错误，交给异常状态处理
// 3.执行者中状态只能触发一次，状态触发一次之后，不能修改状态
// 4.执行者中的this，由调用执行者的作用域决定，因此我们需要将执行者中的this绑定为我们创建的Promise对象。
// 5.在构造函数中需要为Promise对象创建status和value记录Promise的状态和传值。

class MyPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (reason) => {
      throw reason
    };

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            this.resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const x = onFulfilled(value);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const x = onRejected(reason);
              this.resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  catch (onRejected) {
    return this.then(null, onRejected);
  }

  resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
      return reject(new TypeError('Chaining cycle detected for promise'));
    }

    if (x instanceof MyPromise) {
      x.then(
        (value) => this.resolvePromise(promise2, value, resolve, reject),
        (reason) => reject(reason)
      );
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
      let called = false;
      try {
        const then = x.then;
        if (typeof then === 'function') {
          then.call(
            x,
            (y) => {
              if (called) return;
              called = true;
              this.resolvePromise(promise2, y, resolve, reject);
            },
            (r) => {
              if (called) return;
              called = true;
              reject(r);
            }
          );
        } else {
          resolve(x);
        }
      } catch (error) {
        if (called) return;
        called = true;
        reject(error);
      }
    } else {
      resolve(x);
    }
  }
}

// 示例使用
const promise = new MyPromise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 1000);
});

promise
  .then((value) => {
    console.log(value); // 输出 'Promise resolved!'
    return 'Success!';
  })
  .then((value) => {
    console.log(value); // 输出 'Success!'
  })
  .catch((reason) => {
    console.error(reason);
  });
```

:::

## 手写 Promise.all

::: details
01. Promise.all 是一个用于处理多个 Promise 并行执行的方法，它接受一个包含 Promise 的可迭代对象（通常是数组）作为参数，并返回一个新的 Promise。
02. 这个新 Promise 在传入的所有 Promise 都成功（resolved）时，才会被成功解决，否则，只要有一个 Promise 被拒绝（rejected），新 Promise 就会被拒绝，并返回拒绝的原因

```JS
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }

    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    });

    // 如果传入的 promises 数组为空，则直接解决
    if (promises.length === 0) {
      resolve(results);
    }
  });
}

// 示例使用
const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), 500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500));

myPromiseAll([promise1, promise2])
  .then((values) => {
    console.log('All promises resolved:', values);
  })
  .catch((reason) => {
    console.error('At least one promise rejected:', reason);
  });

// Output:
// All promises resolved: [ 'Promise 1', 'Promise 2' ]
```

:::
