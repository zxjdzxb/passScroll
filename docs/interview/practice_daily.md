# 每日算法

[根据这个仓库](https://github.com/hovinghuang/fe-agorithm-interview)来准备算法面试

## 无重复字符的最长子串

* 题目名称：无重复字符的最长子串（类似题目：最长无重复子数组）
* [leetcode 题目](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
* [leetcode 题解](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/by-hovinghuang-qugo/)
* [牛客网 题目](https://www.nowcoder.com/practice/b56799ebfd684fb394bd315e89324fb4?tpId=295&tqId=1008889&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295)
* [牛客网 题解](https://blog.nowcoder.net/n/fce41b44190449f18c605a0a41db9c78)
::: details

#### 解法一：滑动窗口（reduce累加器）

* 思路：
* （1）先判断字符串 s 的长度，如果 s.length <= 1 直接返回 s.length
* （2）将字符串 s 转成数组，这样就可以用数组的 reduce 累加器
* （3）reduce 滑动窗口过程处理（详细过程看以下代码），返回最长子串的长度 maxLen
* 时间复杂度：O(n)，n 代表字符串长度，reduce 会将字符串的每一个字符都遍历一遍
* 空间复杂度：O(n)，n 代表字符串长度，将字符串转成了数组（额外空间）

```JS
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length

  let maxLen = 0
  const strArr = s.split('')

  strArr.reduce((total, value) => {
    console.log(total, value)
    const index = total.indexOf(value)
    // 拼接到 total 尾部
    total += value
    if (index === -1) {
      // 如果该字符没有在 total 中出现过，获取目前为止滑动窗口的最大值
      maxLen = Math.max(total.length, maxLen)
    } else {
      // 如果该字符有在 total 中出现过，则剔除掉 total 中 0 ~ index 的字符
      total = total.slice(index + 1)
    }

    return total
  }, '')

  return maxLen

};
```

#### 解法二：滑动窗口（双指针&哈希）

* 思路：
* （1）先判断字符串 s 的长度，如果 s.length <= 1 直接返回 s.length
* （2）窗口左右界都从数组首部开始，每次窗口优先右移右界，并统计进入窗口的元素的出现频率。
* （3）一旦右界元素出现频率大于1，就需要右移左界直到窗口内不再重复，将左边的元素移除窗口的时候
*     同时需要将它在哈希表中的频率减1，保证哈希表中的频率都是窗口内的频率。
* （4）每轮循环维护最长子串的长度 maxLen
* 时间复杂度：O(n)，外循环窗口右界从数组首右移到数组尾，内循环窗口左界同样如此，因此复杂度为O(n + n) = O(n)
* 空间复杂度：O(n)，最坏情况整个数组都是不重复的，哈希表的长度就是数组长度

```JS
function lengthOfLongestSubstring(s: string): number {

  if (s.length <= 1) return s.length

  let maxLen = 0
  const map = new Map()

  // 设置窗口左右边界
  for (let left = 0, right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      // 窗口右移进入哈希表统计次数
      map.set(s[right], map.get(s[right]) + 1)
    } else {
      map.set(s[right], 1)
    }

    // 出现次数大于1，则窗口内有重复
    while (map.get(s[right]) > 1) {
      // 窗口左移，同时减去该数字出现的次数
      map.set(s[left], map.get(s[left++]) - 1)
    }

    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen

};
```

:::

## 合并两个有序数组

* [leetcode 题目](https://leetcode-cn.com/problems/merge-sorted-array/)
* [leetcode 题解](https://leetcode-cn.com/problems/merge-sorted-array/solution/by-hovinghuang-58f6/)
* [牛客网 题目](https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=295&tqId=658&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295)
* [牛客网 题解](https://blog.nowcoder.net/n/950d8331e9004749adc1a3d98a5ec29f)
::: details

### 解法一：JS Sort

* 思路：
* （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
* （2）将 B shift 填到 A 尾部的扩容区域，然后用 sort 排序
* 时间复杂度：O(nlogn)， JS sort 方法基于快速排序实现
* 空间复杂度：O(1)，常数级变量，无额外空间

```JS
export function merge(A: number[], m: number, B: number[], n: number) {

  for (let i = m; i < m + n; i++) {
    A[i] = B.shift()
  }

  // 升序排列
  A.sort((a, b) => a - b)
}
```

 ### 解法二：双指针
 * 思路：
 * （1）先判断 B 为空直接 return，A 为空则将 B shift 到 A 中
 * （2）使用三个指针，len1 指向数组 A 的最大元素，len2 指向数组B的最大元素，len 指向数组A空间的结尾处。
 * （3）从两个数组最大的元素开始遍历，直到某一个结束，每次取出较大的一个值放入数组 A 空间的最后，然后指针依次往前。
 * （4）如果数组 B 先遍历结束，数组 A 前半部分已经存在了，不用管; 但是如果数组 A 先遍历结束，则需要把数组 B 剩余的前半部分依次逆序加入数组 A 前半部分
 * 时间复杂度：O(m + n)，最坏情况遍历整个数组 A 和 数组 B
 * 空间复杂度：O(1)，常数级变量，无额外空间

```JS
export function merge(A: number[], m: number, B: number[], n: number) {
  let aIndex: number = m - 1;
  let bIndex: number = n - 1;
  let mIndex: number = m + n - 1;

  while (aIndex >= 0 && bIndex >= 0) {
    if (A[aIndex] >= B[bIndex]) {
      A[mIndex--] = A[aIndex--];
    } else {
      A[mIndex--] = B[bIndex--];
    }
  }

  while (bIndex >= 0) {
    A[mIndex--] = B[bIndex--];
  }
}
```

:::

## 字符串相加（大数加法）

 * [leetcode 题目](https://leetcode-cn.com/problems/add-strings/)
 * [leetcode 题解](https://leetcode-cn.com/problems/add-strings/solution/by-hovinghuang-l59r/)
 * [牛客网 题目](https://www.nowcoder.com/practice/11ae12e8c6fe48f883cad618c2e81475?tpId=295&tqId=1061819&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295)
 * [牛客网 题解](https://blog.nowcoder.net/n/1027295c5c8d44f7bbfe2b276e5adf20)
::: details
* 创建指针 *i* 指向 nums1 末位数字，*j* 指向 nums2 末位数字。
* *i*, *j* 数字相加，用进位就用 carry 来记录进位值，无则为 0。
* 若产生进位，则当前数字为 (*i* + *j*)%10 的值。
* 若遍历过程中，nums1 或 nums2 当前已无数字，则用 0 补位来计算。

```JS
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    carry = 0,
    ans = [];
  while (i >= 0 || j >= 0 || carry !== 0) {
    let c1 = i >= 0 ? num1[i] - '0' : 0,
      c2 = j >= 0 ? num2[j] - '0' : 0;
    let sum = c1 + c2 + carry;
    ans.unshift(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return ans.join('');
}
```

:::
 ## 比较版本号
 * [leetcode 题目](https://leetcode-cn.com/problems/compare-version-numbers/)
 * [leetcode 题解](https://leetcode-cn.com/problems/compare-version-numbers/solution/by-hovinghuang-rmlf/)
 * [牛客网 题目](https://www.nowcoder.com/practice/2b317e02f14247a49ffdbdba315459e7)
 * [牛客网 题解](https://blog.nowcoder.net/n/5569dbf30e3e45ea977152a629d86439)
::: details
 * 解法一：分割截取
 * 思路：
 *（1）先根据. 号分割成字符串数组，获取两个数组中的最大长度值，
 *（2）按顺序遍历比较，详细过程看以下代码
 * 时间复杂度：O(max(n, m))
 * 空间复杂度：O(max(n, m))

```JS
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  const maxLen = Math.max(v1.length, v2.length);
  for (let i = 0; i < maxLen; i++) {
    // arr1[i] - '0' ，js 会强制转换成 number 然后相减
    // 例如：（'01' - '0'）， 结果是 1 （number 类型）
    const num1 = v1[i] ? v1[i] - "0" : 0;
    const num2 = v2[i] ? v2[i] - "0" : 0;
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;

}
```

:::

## 有效括号序列

 * [leetcode 题目](https://leetcode-cn.com/problems/valid-parentheses/)
 * [leetcode 题解](https://leetcode-cn.com/problems/valid-parentheses/solution/by-hovinghuang-6gz1/)
 * [牛客网 题目](https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2?tpId=295&tqId=726&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295)
 * [牛客网 题解](https://blog.nowcoder.net/n/620e933e59534064a9722bfa6da0c3d0)
::: details
* 🧠思路
* 有效括号字符串的长度，一定是偶数！
* 右括号前面，必须是相对应的左括号，才能抵消！
* 右括号前面，不是对应的左括号，那么该字符串，一定不是有效的括号！
* 时间复杂度：O(n)，其中 n 为字符串长度
* 空间复杂度：O(n+∣Σ∣)，其中 Σ 表示字符集，本题中字符串只包含 6 种括号，∣Σ∣=6|。栈中的字符数量为 O(n)，而哈希表使用的空间为 O(∣Σ∣)，相加即可得到总空间复杂度。

```JS
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  s = s.split('');
  let sl = s.length;
  if (sl % 2) return false;
  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  let stack = [];
  for (let i of s) {
    console.log(map.get(i))
    if (map.get(i)) {
      if (stack[stack.length - 1] !== map.get(i)) return false;
      else stack.pop();
    } else {
      stack.push(i);
    }
  }
  return !stack.length;
}
```

:::

## 两数之和

 * [leetcode 题目](https://leetcode-cn.com/problems/two-sum/)
 * [leetcode 题解](https://leetcode-cn.com/problems/two-sum/solution/by-hovinghuang-8jqr/)
 * [牛客网 题目](https://www.nowcoder.com/practice/20ef0972485e41019e39543e8e895b7f?tpId=295&tqId=745&ru=/exam/oj&qru=/ta/format-top101/question-ranking&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D295)
 * [牛客网 题解](https://blog.nowcoder.net/n/61a9e5d2ac2f46db9f6f9e324faab016)

::: details

### 双循环

* 第一次接触题目，首先肯定是想到暴力解法，通过双循环遍历数组，找nums[i] + nums[j] === target。
* 时间复杂度: O(n^2)
* 空间复杂度: O(1)

```JS
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = []
  for (let i = 0, len = nums.length; i < len; i++) {
    let dif = target - nums[i]
    // 因为同一元素不允许重复出现，所以从i的下一位开始遍历
    for (let j = i + 1; j < len; j++) {
      if (nums[j] === dif) {
        res = [i, j];
        return res
      }
    }
  }
  // 所有样例都是有返回结果的，这里无所谓
  return res;

};
```

### 哈希表

 * 思路：遍历的同时借助哈希表，记录值和下标
 * 时间复杂度：O(n)，最多遍历数组一遍，每次查询哈希表都是O(1)
 * 空间复杂度：O(n)，最坏情况下找到数组结尾才找到，其他都加入哈希表，哈希表最长 n - 1

```JS
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    let dif = target - nums[i]
    if (map.has(dif)) {
      return [map.get(dif), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
```

:::

## 爬楼梯（跳台阶）

 * [leetcode 题目](https://leetcode-cn.com/problems/climbing-stairs/)
 * [leetcode 题解](https://leetcode-cn.com/problems/climbing-stairs/solution/by-hovinghuang-bl5r/)
 * [牛客网 题目](https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4)
 * [牛客网 题解](https://blog.nowcoder.net/n/7057ccebe8fd452580442b74ffbb8d90)
::: details

### 递归

 * 思路：满足斐波那契数列公式，最简单的肯定是递归
 * 时间复杂度：O(2^n)
 * 空间复杂度：O(n)
 */

```JS
 function climbStairs(n: number): number {

   if (n <= 1) {
     return 1; // 当楼梯数为 0 或 1 时，只有一种方法
   }
   return climbStairs(n - 1) + climbStairs(n - 2); // 爬到第 n 阶楼梯的方法数等于爬到第 n-1 阶楼梯的方法数加上爬到第 n-2 阶

 };
```

### 动态规划

* 本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和

1. 爬上 n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
2. 爬上 n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
所以我们得到公式 dp[n]=dp[n−1]+dp[n−2]
同时需要初始化 dp[0]=1 和 dp[1]=1
* 时间复杂度：O(n)
* 空间复杂度：O(n)

```JS
var climbStairs = function(n) {
  if (n <= 1) {
    return 1; // 当楼梯数为 0 或 1 时，只有一种方法
  }
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]; // 最终结果存储在 dp[n] 中
};
```

:::

## 全排列

 * [leetcode 题目](https://leetcode-cn.com/problems/permutations/)
 * [leetcode 题解](https://leetcode-cn.com/problems/permutations/solution/by-hovinghuang-ubrb/)
 * [牛客网 题目](https://www.nowcoder.com/practice/4bcf3081067a4d028f95acee3ddcd2b1)
 * [牛客网 题解](https://blog.nowcoder.net/n/02102d26f1bb4026af9be0ec38984ec9)
::: details

### 回溯 + 递归

 * 思路：
 *  回溯函数：定义一个回溯函数 backtrack，接受两个参数：path（用于保存当前的部分排列）和 used（用于标记数字的使用情况）。
* 回溯递归：
  + 当 path 的长度等于 nums 的长度时，说明得到了一个完整的排列，将其加入到结果数组 result 中。
  + 遍历数组 nums 中的每个数字，如果该数字已经被标记为已使用（used[num] === true），则跳过该数字。
  + 如果该数字未被使用，将其加入到 path 数组中，并标记为已使用（used[num] = true），然后递归调用 backtrack 进入下一层决策树。
  + 在递归结束后（回溯），撤销对数字的选择，即将其从 path 中弹出，并恢复数字的状态为未使用（used[num] = false）。
 * 时间复杂度: O(n!), n个元素的数组进行全排列
 * 空间复杂度: O(n), 递归栈的最大深度为数组长度n，res属于返回必要空间

```JS
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (const num of nums) {
      if (used[num]) continue; // 已经使用过的数字跳过

      path.push(num); // 选择当前数字
      used[num] = true; // 标记当前数字已被使用
      backtrack(path, used); // 递归进入下一层决策树
      path.pop(); // 回溯，撤销选择
      used[num] = false; // 恢复数字状态，标记为未使用
    }
  }

  backtrack([], []);
  return result;
};
```

:::

## 大子数组和(连续子数组的最大和)

 * [leetcode 题目](https://leetcode-cn.com/problems/maximum-subarray/)
 * [leetcode 题解](https://leetcode-cn.com/problems/maximum-subarray/solution/by-hovinghuang-exw9/)
 * [牛客网 题目](https://www.nowcoder.com/practice/459bd355da1549fa8a49e350bf3df484)
 * [牛客网 题解](https://blog.nowcoder.net/n/8d36ffcdc332432197d9f44e6af0e78c)
::: details

### 动态规划

* 定义一个变量max_sum来保存当前找到的最大和，
* 另一个变量current_sum来保存当前正在检查的子数组的和
* 遍历整个数组，在遍历的过程中不断更新current_sum，并且在每次更新时更新max_sum
* 时间复杂度：O(n)，遍历一遍。
* 空间复杂度：O(n)，动态规划辅助数组长度为n

```JS
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  if (nums.length === 0) {
    return 0;
  }

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;

};
```

:::

## 路径总和

 * [leetcode 题目](https://leetcode-cn.com/problems/path-sum/)
 * [leetcode 题解](https://leetcode-cn.com/problems/path-sum/solution/by-hovinghuang-ax6m/)
 * [牛客网 题目](https://www.nowcoder.com/practice/508378c0823c423baa723ce448cbfd0c)
 * [牛客网 题解](https://blog.nowcoder.net/n/b763226e0fd74c01a2a643a10db22c7b)

::: details

### 递归（先序遍历）

 * 思路：
 *   递归地在树的节点上进行遍历，并不断减去当前节点的值，直到达到叶子节点，检查减到0的情况
 * 时间复杂度：O(n)，先序遍历二叉树所有结点
 * 空间复杂度：O(n)，最坏情况二叉树化为链表，递归栈空间最大为n

```JS
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }

  // 如果当前节点是叶子节点，检查当前值是否等于剩余的目标和
  if (!root.left && !root.right && targetSum - root.val === 0) {
    return true;
  }

  // 递归检查左子树或右子树
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
```

:::

## 反转链表

 * [leetcode 题目](https://leetcode-cn.com/problems/reverse-linked-list/)
 * [leetcode 题解](https://leetcode-cn.com/problems/reverse-linked-list/solution/by-hovinghuang-zhkh/)
 * [牛客网 题目](https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca)
 * [牛客网 题解](https://blog.nowcoder.net/n/087ff0e6f04c4ff699596619f7b4adfd)
::: details
 ### 迭代（双指针）
 * 思路：
 *   我们可以设置两个指针，一个当前节点的指针，一个上一个节点的指针(初始为空)。
 *   遍历整个链表，每到一个节点，断开当前节点与后面节点的指针，并用临时变量记录后一个节点，然后当前节点指向上一个节点。
 * 再轮换当前指针与上-一个指针，让它们进入下一个节点及下一个节点的前序节点。
 * 时间复杂度: O(n)，遍历链表一次
 * 空间复杂度: 0(1)，无额外空间使用

```JS
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  let prev = null;
  let curr = head; //指向头节点
  while (curr) {
    const tmp = curr.next; // 暂存后续节点
    curr.next = prev; // 修改 next 引用指向
    prev = curr; //pre 暂存 cur
    curr = tmp; //cur 访问下一节点
  }
  return prev;
};
```

### 递归

 * 解法二：递归
 * 思路：
 *   从上述方法一，我们可以看到每当我们反转链表的一个节点以后，要遍历进入下一个节点进入反转，
 *   相当于对后续的子链表进行反转，这就是一个子问题，因此我们也可以使用递归。
 * 时间复杂度：O(n)，相当于递归遍历链表
 * 空间复杂度：O(n)，递归栈深度为链表长度n

```JS
function reverseList(head) {
  // 边界条件
  if (head === null || head.next === null) {
    return head;
  }

  // 递归调用反转链表
  let reversedList = reverseList(head.next);

  // 将当前节点的下一个节点的指针指向当前节点
  head.next.next = head;
  head.next = null;

  return reversedList;
}
```

:::

## 三数之和

 * [leetcode 题目](https://leetcode-cn.com/problems/3sum/)
 * [leetcode 题解](https://leetcode.cn/problems/3sum/solutions/12307/hua-jie-suan-fa-15-san-shu-zhi-he-by-guanpengchn/)
 * [牛客网 题目](https://www.nowcoder.com/practice/345e2ed5f81d4017bbb8cc6055b0b711)
 * [牛客网 题解](https://blog.nowcoder.net/n/c9e6f346004f4aedaf087cbdb099b2e6)
::: details

### 数组遍历

1. **排序数组：** 首先对输入的数组进行排序。这有助于后续的指针移动和重复项的跳过，同时也有利于找到所有满足条件的三元组。
2. **双指针遍历：** 使用两层循环遍历数组。外层循环固定一个数值作为基准，内层循环使用左右双指针指向数组的头尾，并不断移动指针来寻找满足条件的三元组。
3. **跳过重复项：** 在寻找三元组的过程中，遇到重复项需要跳过，以避免重复的三元组出现。

#### 时间复杂度：

* **排序：** 排序数组的时间复杂度为 O(nlogn)。
* **双指针遍历：** 双指针的遍历时间复杂度为 O(n^2)，其中外层循环是 O(n)，内层循环是 O(n)。

因此，总体时间复杂度为 O(nlogn + n^2)，即 O(n^2)。主要耗时的部分是双指针的遍历，而排序所需时间也被掩盖在其后。

#### 空间复杂度：

* **排序空间：** 排序所需的空间复杂度为 O(logn) 或 O(n)，取决于使用的排序算法是原地排序还是需要额外空间。
* **结果空间：** 存储结果的空间复杂度为 O(n)，因为可能存储最多 O(n) 个满足条件的三元组。

因此，总体空间复杂度为 O(n) 或 O(logn)（取决于排序算法）。空间复杂度主要受排序和存储结果的影响。

```JS
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let ans = [];
  const len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] == nums[j + 1]) j++; // 去重
        while (j < k && nums[k] == nums[k - 1]) k--; // 去重
        j++;
        k--;
      } else if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      };
    }
  }
  return ans;

};
```

:::
