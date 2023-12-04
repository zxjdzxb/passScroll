/*
* 堆排序（Heap Sort）是一种基于堆数据结构的排序算法，它利用堆的性质进行排序操作。

堆是一个完全二叉树，并且满足堆性质：对于每个节点i，其父节点的值大于等于（或小于等于）子节点的值，这被称为大顶堆（或小顶堆）。

堆排序的基本思想是：首先将待排序的数组构建成一个大顶堆（或小顶堆），然后将堆顶元素与数组末尾的元素交换，再对剩余的元素进行堆调整，重复这个过程直到数组完全有序。
* */
function heapSort(arr) {
  // 构建最大堆
  buildMaxHeap(arr)
  // 从最后一个非叶子节点开始，进行堆调整
  for (let i = arr.length - 1; i > 0; i--) {
    // 将堆顶元素与当前末尾元素交换
    swap(arr, 0, i)
    // 对剩余元素进行堆调整，保持最大堆性质
    heapify(arr, 0, i)
  }

  return arr
}

function buildMaxHeap(arr) {
  const len = arr.length
  // 从最后一个非叶子节点开始，依次进行堆调整
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len)
  }
}

function heapify(arr, i, len) {
  const left = 2 * i + 1 // 左子节点索引
  const right = 2 * i + 2 // 右子节点索引
  let largest = i // 记录最大值的索引

  // 与左子节点比较，找出最大值的索引
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  // 与右子节点比较，找出最大值的索引
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  // 如果最大值不是当前节点，则交换节点并继续进行堆调整
  if (largest !== i) {
    swap(arr, i, largest)
    heapify(arr, largest, len)
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
console.log(heapSort(arr)) // [1, 2, 5, 7, 7, 8, 9, 12, 34, 39, 56]
