
// You should implement your task here.


module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) return [];

  let matrixIt = matrix.entries();
  let res = [];

  for (let [index, item] of matrixIt) {
    if (index % 2 === 0) {
      item.sort((a, b) => a - b)
      res.push(item);
    } else {
      item.sort((a, b) => b - a)
      res.push(item);
    }
  }
  return res.flat();
}

