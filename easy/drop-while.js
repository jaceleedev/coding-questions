/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropWhile(array, predicate) {
  let i = 0;

  while (i < array.length && predicate(array[i], i, array)) {
    ++i;
  }

  return array.slice(i);
}
