/*
 * 归并排序（Merge Sort）是一种基于分治思想的排序算法。
 * 它将待排序的数组递归地分成两个子数组，然后对两个子数组分别进行排序，最后将两个有序的子数组合并成一个有序的数组。
 * */
//归并排序将整个排序序列看成一个二叉树进行分解，首先将树分解到每一个子节点，
// 树的每一层都是一个归并排序的过程，每 一层归并的时间复杂度为 O(n)，因为整个树的高度为 lgn，
// 所以归并排序的时间复杂度不管在什么情况下都为O(nlogn)。
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr // 基线条件：数组长度小于等于1，直接返回
  }

  // 将数组分成两个子数组;
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // 递归地对两个子数组进行排序
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // 合并两个有序的子数组
  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  const merged = []
  let leftIndex = 0
  let rightIndex = 0

  // 比较两个子数组的元素，将较小的元素依次放入合并后的数组
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex])
      leftIndex++
    } else {
      merged.push(right[rightIndex])
      rightIndex++
    }
  }

  // 将剩余的元素放入合并后的数组
  while (leftIndex < left.length) {
    merged.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex])
    rightIndex++
  }

  return merged
}

const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
console.log(mergeSort(arr)) // [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]
