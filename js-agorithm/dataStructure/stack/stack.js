/**
 * 创建一个栈数据结构
 * @returns {Object} 包含栈操作方法的对象
 */
function createStack() {
    const stack = [];

    /**
     * 压栈操作，往栈里面添加元素
     * @param {*} item 要添加的元素
     */
    function push(item) {
      stack.push(item);
    }

    /**
     * 出栈操作，从栈中取出元素，并返回取出的那个元素
     * @returns {*} 出栈的元素
     */
    function pop() {
      return stack.pop();
    }

    /**
     * 查看栈顶元素
     * @returns {*} 栈顶元素
     */
    function peek() {
      return stack[stack.length - 1];
    }

    /**
     * 判断栈是否为空
     * @returns {boolean} 栈是否为空的布尔值
     */
    function isEmpty() {
      return stack.length === 0;
    }

    /**
     * 获取栈中元素个数
     * @returns {number} 栈中元素个数
     */
    function size() {
      return stack.length;
    }

    /**
     * 返回以字符串形式的栈内元素数据
     * @returns {string} 栈内元素的字符串表示
     */
    function toString() {
      return stack.join(" ");
    }

    return {
      push,
      pop,
      peek,
      isEmpty,
      size,
      toString,
    };
  }

  // 使用示例
  const myStack = createStack();

  myStack.push(1);
  myStack.push(2);
  myStack.push(3);

  console.log(myStack.toString()); // "1 2 3"
  console.log(myStack.size()); // 3
  console.log(myStack.peek()); // 3

  myStack.pop();

  console.log(myStack.toString()); // "1 2"
  console.log(myStack.isEmpty()); // false

  // 创建一个基于JS对象的栈
  function createStackobject() {
    const stack = {};
    let count = 0;

    // 压栈操作，往栈里面添加元素
    function push(item) {
      stack[count] = item;
      count++;
    }

    // 出栈操作，从栈中取出元素，并返回取出的那个元素
    function pop() {
      if (isEmpty()) {
        return undefined; // 栈为空时返回 undefined
      }
      count--;
      const item = stack[count];
      delete stack[count];
      return item;
    }

    // 查看栈顶元素
    function peek() {
      if (isEmpty()) {
        return undefined; // 栈为空时返回 undefined
      }
      return stack[count - 1];
    }

    // 判断栈是否为空
    function isEmpty() {
      return count === 0;
    }

    // 获取栈中元素个数
    function size() {
      return count;
    }

    // 清空栈
    function clear() {
      stack = {};
      count = 0;
    }

    // 返回以字符串形式的栈内元素数据
    function toString() {
      const items = [];
      for (let i = 0; i < count; i++) {
        items.push(stack[i]);
      }
      return items.join(" ");
    }

    return {
      push,
      pop,
      peek,
      isEmpty,
      size,
      clear,
      toString,
    };
  }

  // 使用示例
  const myStackobj = createStackobject();

  myStackobj.push(1);
  myStackobj.push(2);
  myStackobj.push(3);

  console.log(myStackobj.toString()); // "1 2 3"
  console.log(myStackobj.size()); // 3
  console.log(myStackobj.peek()); // 3

  myStackobj.pop();

  console.log(myStackobj.toString()); // "1 2"
  console.log(myStackobj.isEmpty()); // false
