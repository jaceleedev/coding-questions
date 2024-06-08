/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
  let index = 0;

  while (index < arr.length) {
    const minIndex = findMinIndex(arr, index);
    swap(arr, index, minIndex);
    ++index;
  }

  return arr;
}

function findMinIndex(arr, start) {
  let minIndex = start;

  for (let i = start; i < arr.length; ++i) {
    if (arr[minIndex] > arr[i]) {
      minIndex = i;
    }
  }

  return minIndex;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
