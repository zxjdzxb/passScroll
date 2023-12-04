class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.toString();
  }
}

class ObjectQueue {
  constructor() {
    this.queue = {};
    this.end = -1;
    this.front = -1;
  }

  // 入队
  enqueue(value) {
    if (this.front === -1) {
      this.front++;
    }
    this.queue[++this.end] = value;
  }

  // 出队
  dequeue() {
    if (!this.isEmpty()) {
      const res = this.queue[this.front];
      delete this.queue[this.front++];
      return res;
    }
    return null;
  }

  // 取队头元素
  peek() {
    if (!this.isEmpty()) {
      return this.queue[this.front];
    }
    return null;
  }

  // 判断队列是否为空
  isEmpty() {
    return this.front > this.end;
  }

  // 取队列有多少个元素
  size() {
    return this.end - this.front + 1;
  }

  // 清空队列
  clear() {
    this.queue = {};
    this.front = -1;
    this.end = -1;
  }
}
module.exports = { Queue, ObjectQueue };
