/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
  let maxElement = undefined;
  let maxValue = undefined;

  for (const element of array) {
    const value = iteratee(element);

    if (value != null && (maxValue === undefined || value > maxValue)) {
      maxValue = value;
      maxElement = element;
    }
  }

  return maxElement;
}
