/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = func.call(this, ...args);
    }

    return result;
  };
}
