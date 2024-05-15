/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  return array.reduce((acc, value) => acc + value, 0) / array.length;
}
