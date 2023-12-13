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

## 解法一：JS Sort

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

 ## 解法二：双指针
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
