/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
  const intervalId = setInterval(callback, delay, ...args);

  return function cancleInterval() {
    clearInterval(intervalId);
  };
}
