// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length == 0) return [];
    let result = [];
    matrix.forEach((element, index) => {
        result.push(index % 2 == 0 ? element : element.reverse())
    });
    return result.flat();
}
