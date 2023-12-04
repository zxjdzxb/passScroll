/*选择排序（Selection Sort）是一种简单直观的排序算法。它的基本思想是从待排序的数组中选择最小（或最大）的元素，
将其放置在已排序序列的末尾，然后再从剩余未排序的元素中选择最小（或最大）的元素，放置在已排序序列的末尾，
依此类推，直到整个数组排序完成。选择排序的基本思想为每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止。
*/
const arr = [1, 15, 7, 8, 34, 7, 39, 12, 56, 9, 5];
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    // 在未排序部分中找到最小元素的索引
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 将找到的最小元素与未排序部分的第一个元素交换位置
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort(arr));

// 另一种写法
function selectSort(array) {
  let length = array.length;
  // 如果不是数组或者数组长度小于等于1，直接返回，不需要排序
  if (!Array.isArray(array) || length <= 1) return;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i; // 设置当前循环最小元素索引
    for (let j = i + 1; j < length; j++) {
      // 如果当前元素比最小元素索引，则更新最小元素索引
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    // 交换最小元素到当前位置
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    //   swap(array, i, minIndex);
  }
  return array;
}

// 交换数组中两个元素的位置
function swap(array, left, right) {
  var temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

// console.log(selectSort(arr)); // [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]
