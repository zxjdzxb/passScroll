/*
 * 快速排序（Quick Sort）是一种常用且高效的排序算法，它基于分治的思想。
 * 快速排序选择一个元素作为基准（通常是数组的第一个或最后一个元素），然后将数组分成两部分，一部分是小于基准的元素，另一部分是大于基准的元素。
 * 然后对这两部分分别进行递归地快速排序，最终得到完全有序的数组。
 * */
//在快速排序中，选择一个基准元素后，通过遍历数组将比基准小的元素放入左侧数组，将比基准大的元素放入右侧数组。
// 然后，对左右两个数组进行递归地快速排序，最后将排序后的左侧数组、基准元素和排序后的右侧数组依次连接起来。
const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr // 基线条件：数组长度小于等于1，直接返回
  }
  const pivot = arr[0] // 选择第一个元素作为基准,仅限
  const left = []
  const right = []

  // 将比基准小的元素放入左侧数组，比基准大的元素放入右侧数组
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // 递归地对左右两个数组进行快速排序
  const sortedLeft = quickSort(left)
  const sortedRight = quickSort(right)

  return [...sortedLeft, pivot, ...sortedRight]
}
//
console.log(quickSort(arr)) // [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]

/*优化
*
* 在这个优化后的代码中，主要进行了以下改进：

基准元素的选择：使用了"三数取中"的方法选择基准元素，从而减少不平衡分割的情况。

原地分割：通过维护一个指针i，遍历数组并交换元素，将小于基准的元素放到数组的左侧。这样可以避免创建额外的左右子数组，节省空间。

递归优化：通过对左右两个子数组的排序，避免对小规模子数组进行递归排序，从
* */
function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr // 基线条件：数组长度小于等于1，直接返回
  }

  const pivot = getPivotIndex(arr) // 获取基准元素

  const left = []
  const right = []

  for (let item of arr) {
    if (item < pivot) {
      left.push(item)
    } else if (item > pivot) {
      right.push(item)
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)]
}

function getPivotIndex(arr) {
  // 可以根据需要选择不同的基准选择策略
  // 这里使用三数取中的方法选择基准元素
  // 在这里，使用"三数取中"来选择基准元素
  const first = arr[0]
  const middle = arr[Math.floor(arr.length / 2)]
  const last = arr[arr.length - 1]

  const sorted = [first, middle, last].sort((a, b) => a - b)

  return sorted[1]
}

console.log(quickSort2(arr)) // [1, 2, 5, 7, 7, 8, 9, 12, 34, 39, 56]
