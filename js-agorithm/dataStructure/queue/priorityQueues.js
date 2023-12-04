const { Queue } = require("./queue");

// 优先队列内部的元素类
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// 优先队列类（继承 Queue 类）
class PriorityQueue extends Queue {
  constructor() {
    super();
  }
  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  enqueue(element, priority) {
    const queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      // 定义一个变量记录是否成功添加了新元素
      for (let i = 0; i < this.items.length; i++) {
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < this.items[i].priority) {
          // 在指定的位置插入元素
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    return super.dequeue();
  }

  front() {
    return super.front();
  }

  isEmpty() {
    return super.isEmpty();
  }

  size() {
    return super.size();
  }

  toString() {
    let result = "";
    for (let item of this.items) {
      result += `${item.element}-${item.priority} `;
    }
    return result;
  }
}

// 使用示例
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task A", 2);
priorityQueue.enqueue("Task B", 1);
priorityQueue.enqueue("Task C", 3);
// priorityQueue.enqueue("Task D", 5);
// priorityQueue.enqueue("Task E", 4);
console.log(priorityQueue.toString());
console.log(priorityQueue.front()); // "Task B"
console.log(priorityQueue.dequeue()); // "Task B"
console.log(priorityQueue.front()); // "Task A"
console.log(priorityQueue.size()); // 2
console.log(priorityQueue.toString()); // "Task A-2 Task C-3 "
