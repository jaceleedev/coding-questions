/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  return this.map((el) => el * el);
};
