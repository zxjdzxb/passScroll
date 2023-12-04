function decimalToBinary(decimal) {
    if (decimal === 0) {
      return "0"; // 特殊情况处理
    }

    const stack = [];

    while (decimal > 0) {
      const remainder = decimal % 2; // 获取余数
      stack.push(remainder); // 将余数压入栈
      decimal = Math.floor(decimal / 2); // 整除2，继续循环
    }

    // 从栈中弹出元素，组成二进制表示
    let binary = "";
    while (!isEmpty(stack)) {
      binary += stack.pop();
    }

    return binary;
  }

  // 辅助函数：判断栈是否为空
  function isEmpty(stack) {
    return stack.length === 0;
  }

  // 测试
  console.log(decimalToBinary(10)); // "1010"
  console.log(decimalToBinary(0)); // "0"
  console.log(decimalToBinary(42)); // "101010"
