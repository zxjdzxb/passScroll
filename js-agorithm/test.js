/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }

  const dp = new Array(nums.length).fill(1) // 创建并初始化 dp 数组，每个位置初始为 1
  console.log(dp)

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1) // 更新当前位置的递增子序列长度
      }
      console.log(dp)
    }
  }

  return Math.max(...dp) // 返回 dp 数组中的最大值
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 输出：4
