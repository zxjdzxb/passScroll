/*
* 希尔排序（Shell Sort）是一种改进的插入排序算法，也被称为缩小增量排序。
* 它通过将待排序的数组按照一定的增量分组，对每个分组使用插入排序，然后逐步缩小增量，再次对分组进行插入排序，直到增量为1时完成最后一次排序。
* */
//在希尔排序中，初始增量（间隔）取数组长度的一半，然后依次将数组分成多个增量间隔的子序列，对每个子序列进行插入排序。
// 随着排序的进行，逐渐缩小增量，直到增量为1时，最后一次排序等价于普通的插入排序。
// 希尔排序的核心思想是利用较大的步长进行初步的粗略排序，然后逐渐减小步长，对子序列进行更精细的排序。
//
// 希尔排序的时间复杂度并不容易确定，因为它取决于增量序列的选择。
// 最坏情况下的时间复杂度为O(n^2)，但在一般情况下，希尔排序的时间复杂度在O(n log n)到O(n^2)之间。
// 希尔排序相较于普通的插入排序在效率上有所提升，尤其对于大型数组或者部分有序的数组，它的性能较好。
function shellSort(arr) {
  const len = arr.length;
  let gap = Math.floor(len / 2); // 初始增量为数组长度的一半

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let current = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > current) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = current;
    }

    gap = Math.floor(gap / 2); // 缩小增量
  }

  return arr;
}

const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1];
console.log(shellSort(arr)); // [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]