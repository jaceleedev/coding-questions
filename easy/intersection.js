/**
 * Computes the intersection of arrays, returning a new array containing unique values present in all given arrays.
 *
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersection(...arrays) {
  const set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; ++i) {
    set.forEach((num) => {
      if (!arrays[i].includes(num)) {
        set.delete(num);
      }
    });
  }

  return Array.from(set);
}
