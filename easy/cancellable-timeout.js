/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
  const timeoutId = setTimeout(callback, delay, ...args);

  return function cancelTimeout() {
    clearTimeout(timeoutId);
  };
}
