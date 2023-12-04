const {ObjectQueue} = require('./queue');
function hotPotato(names, num) {
    const queue = new ObjectQueue();

    // 将所有人加入队列
    for (const name of names) {
      queue.enqueue(name);
    }

    while (queue.size() > 1) {
      for (let i = 0; i < num - 1; i++) {
        // 将队首的人移动到队尾
        queue.enqueue(queue.dequeue());
      }
      // 淘汰持有花的人
      const eliminated = queue.dequeue();
      console.log(`${eliminated} 被淘汰！`);
    }

    // 返回最后剩下的人
    return queue.peek();
  }

  // 测试
  const players = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const winner = hotPotato(players, 3);
  console.log(`胜者是：${winner}`);