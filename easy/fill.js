/**
 * @param {Array} array - The array to fill.
 * @param {*} value - The value to fill array with.
 * @param {number} [start=0] - The start position.
 * @param {number} [end=array.length] - The end position.
 * @return {Array} Returns the filled array.
 */
export default function fill(array, value, start = 0, end = array.length) {
  const length = array.length;

  if (start < 0) {
    start = Math.max(start + length, 0);
  } else {
    start = Math.min(start, length);
  }

  if (end < 0) {
    end = Math.max(end + length, 0);
  } else {
    end = Math.min(end, length);
  }

  for (let i = start; i < end; ++i) {
    array[i] = value;
  }

  return array;
}
