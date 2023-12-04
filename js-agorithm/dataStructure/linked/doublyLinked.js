// 定义链表节点类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

// 定义双向链表类
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 向链表尾部追加一个新元素
  append(element) {
    const newNode = new Node(element);
    console.log("newNode", newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ！！跟单向链表不同，不用通过循环找到最后一个节点
      // 巧妙之处
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // 向链表的指定位置插入一个新元素
  insert(position, element) {
    // 1、position 越界判断
    if (position >= 0 && position <= this.length) {
      // 2、创建新的双向链表节点
      const newNode = new Node(element);
      // 3、判断多种插入情况
      if (position === 0) {
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
             //== 巧妙之处：相处腾出 this.head 空间，留个 newNode 来赋值 ==//
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
        }
      } else if (position === this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else { // 在 0 ~ this.length 位置中间插入
        let current = this.head;
        let index = 0;
         // 找到要插入位置的节点
        while (index < position) {
          current = current.next;
          index++;
        }
        // 交换节点信息
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
      }
      this.length++;
      return true;
    }
    return false;
  }

  // 获取指定位置的元素
  getElement(position) {
    if (position >= 0 && position < this.length) {
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

  // 修改指定位置上的元素
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

  // 从链表中的删除指定位置的元素
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let index = 0;
        while (index < position) {
          current = current.next;
          index++;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this.length--;
      return current.element;
    }
    return null;
  }

  // 从链表删除指定的元素
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
    while (current) {
      result += current.element + (current.next ? " -> " : "");
      current = current.next;
    }
    return result;
  }

  // 返回正向遍历节点字符串形式
  forwardString() {
    return this.toString();
  }

  // 返回反向遍历的节点的字符串形式
  backwardString() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.element + (current.prev ? " -> " : "");
      current = current.prev;
    }
    return result;
  }
}

// 使用示例
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
console.log(doublyLinkedList.toString()); // "1 -> 2 -> 3"
doublyLinkedList.insert(1, 4);
console.log(doublyLinkedList.toString()); // "1 -> 4 -> 2 -> 3"
doublyLinkedList.removeAt(2);
console.log(doublyLinkedList.toString()); // "1 -> 4 -> 3"

doublyLinkedList.update(2,5)
console.log(doublyLinkedList.toString()); // "1 -> 4 -> 3"

console.log(doublyLinkedList.getElement(1)); // 4
console.log(doublyLinkedList.indexOf(3)); // 2
console.log(doublyLinkedList.size()); // 3
console.log(doublyLinkedList.isEmpty()); // false
console.log(doublyLinkedList.forwardString()); // "1 -> 4 -> 3"
console.log(doublyLinkedList.backwardString()); // "3 -> 4 -> 1"
