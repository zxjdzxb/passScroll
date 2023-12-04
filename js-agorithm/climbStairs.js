// Note: 爬楼梯


// 递归
// 时间复杂度：O(2^n)
// 空间复杂度：O(n)
function climbStairs(n) {
    if (n <= 1) {
        return 1; // 当楼梯数为 0 或 1 时，只有一种方法
    }
    return climbStairs(n - 1) + climbStairs(n - 2); // 爬到第 n 阶楼梯的方法数等于爬到第 n-1 阶楼梯的方法数加上爬到第 n-2 阶楼梯的方法数
}
// 动态规划
// 时间复杂度：O(n)
// 空间复杂度：O(n)
function climbStairs2(n) {
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
}

console.log(climbStairs(10)); // 89
console.log(climbStairs2(10)); // 89
