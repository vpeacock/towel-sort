// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];

    matrix.map((elem, index) => {
        if (index % 2 !== 0) {
            elem.reverse();
        }
    });
    return [].concat(...matrix);
};
