// No skeleton is provided. Export an object that has a single `getInstance()` method.

const globalMap = new Map();
globalMap.getInstance = function () {
  return this;
};

export default globalMap;
