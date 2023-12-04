// 定义链表节点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// 定义链表类
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 向链表尾部添加一个新的项
  append(element) {
    const newNode = new Node(element);
    // 链表长度为 0 时，即只有 head 的时候
    if (!this.head) {
      this.head = newNode;
    } else {
      // 链表长度大于 0 时，在最后面添加新节点
      let current = this.head;
      // 当 currentNode.next 不为空时，
      // 循序依次找最后一个节点，即节点的 next 为 null 时
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // 向链表的特定位置插入一个新的项
  insert(position, element) {
    // position 新插入节点的位置
    // position = 0 表示新插入后是第一个节点
    // position = 1 表示新插入后是第二个节点，以此类推

    // 对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position >= 0 && position <= this.length) {
      const newNode = new Node(element);
      if (position === 0) {
        // 让新节点的 next 指向 原来的第一个节点，即 head
        newNode.next = this.head;
        // head 赋值为 newNode
        this.head = newNode;
      } else {
        // 初始化一些变量
        let current = this.head; // 当前节点初始化为 head
        let previous = null;
        let index = 0;
        // 在 0 ~ position 之间遍历，不断地更新 currentNode 和 previousNode
        // 直到找到要插入的位置
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
        newNode.next = current;
        previous.next = newNode;
      }
      // 更新链表长度
      this.length++;
      return true;
    }
    return false;
  }

  // 获取对应位置的元素
  get(position) {
    // position 越界判断
    if (position >= 0 && position < this.length) {
      //  获取指定 position 节点的 data
      let current = this.head;
      let index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
      return current.element;
    }
    return null;
  }

  // 返回元素在链表中的索引，如果链表中没有该元素就返回 -1
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // 修改某个位置的元素
  update(position, element) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let index = 0;
      while (index < position) {
        current = current.next;
        index++;
      }
      current.element = element;
      return true;
    }
    return false;
  }

  // 从链表的特定位置移除一项
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
      } else {
         // 通过循环遍历，找到指定 position 的节点，赋值到 currentNode
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  // 从链表中移除一项
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 如果链表中不包含任何元素，返回 true，否则返回 false
  isEmpty() {
    return this.length === 0;
  }

  // 返回链表包含的元素个数
  size() {
    return this.length;
  }

  // 重写继承自 JavaScript 对象默认的 toString 方法
  toString() {
    let current = this.head;
    let result = "";
    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (current) {
      result += current.element + (current.next ? " -> " : "");
      current = current.next;
    }
    return result;
  }
}

// 使用示例
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.toString()); // "1 -> 2 -> 3"
linkedList.insert(1, 4);
console.log(linkedList.toString()); // "1 -> 4 -> 2 -> 3"
linkedList.removeAt(2);
console.log(linkedList.toString()); // "1 -> 4 -> 3"
console.log(linkedList.get(1)); // 4
console.log(linkedList.indexOf(3)); // 2
console.log(linkedList.size()); // 3
console.log(linkedList.isEmpty()); // false
