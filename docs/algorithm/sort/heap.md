## 堆排序

#### （1）堆排序介绍

 堆排序（Heap Sort）是一种基于堆数据结构的排序算法，它利用堆的性质进行排序操作。

堆是一个完全二叉树，并且满足堆性质：对于每个节点i，其父节点的值大于等于（或小于等于）子节点的值，这被称为大顶堆（或小顶堆）。

堆排序的基本思想是：首先将待排序的数组构建成一个大顶堆（或小顶堆），然后将堆顶元素与数组末尾的元素交换，再对剩余的元素进行堆调整，重复这个过程直到数组完全有序。

#### （2）描述

* 堆是一个完全二叉树。
* 完全二叉树： 二叉树除开最后一层，其他层结点数都达到最大，最后一层的所有结点都集中在左边（左边结点排列满的情况下，右边才能缺失结点）。
* 大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
* 小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。
* 堆的存储： 堆由数组来实现，相当于对二叉树做层序遍历。
* 将初始二叉树转化为大顶堆（heapify）（实质是从第一个非叶子结点开始，从下至上，从右至左，对每一个非叶子结点做heapify操作），此时根结点为最大值，将其与最后一个结点交换。
* 除开最后一个结点，将其余节点组成的新堆转化为大顶堆（实质上是对根节点做heapify操作），此时根结点为次最大值，将其与最后一个结点交换。
* 重复步骤2，直到堆中元素个数为1（或其对应数组的长度为1），排序完成。

#### （3）图片演示

![在这里插入图片描述](./img/heap.gif)

#### （4）代码示例

```js
function heapSort(arr) {
  // 构建最大堆
  buildMaxHeap(arr);
  // 从最后一个非叶子节点开始，进行堆调整
  for (let i = arr.length - 1; i > 0; i--) {
    // 将堆顶元素与当前末尾元素交换
    swap(arr, 0, i);
    // 对剩余元素进行堆调整，保持最大堆性质
    heapify(arr, 0, i);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const len = arr.length;
  // 从最后一个非叶子节点开始，依次进行堆调整
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
}

function heapify(arr, i, len) {
  const left = 2 * i + 1; // 左子节点索引
  const right = 2 * i + 2; // 右子节点索引
  let largest = i; // 记录最大值的索引

  // 与左子节点比较，找出最大值的索引
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  // 与右子节点比较，找出最大值的索引
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }

  // 如果最大值不是当前节点，则交换节点并继续进行堆调整
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, len);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1];
console.log(heapSort(arr)); // [1, 2, 5, 7, 7, 8, 9, 12, 34, 39, 56]
```
