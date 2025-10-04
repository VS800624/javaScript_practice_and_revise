//Q) You are given a 2D 0-indexed integer array dimensions.
// For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.
// Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

function largestRectangleArea(dimensions) {
    let maxDiagonal = -1;
    let maxArea = -1;

    for (let i = 0; i < dimensions.length; i++) {
        let length = dimensions[i][0];
        let width = dimensions[i][1];

        let diagonalSq = length * length + width * width;
        let area = length * width;
        console.log(diagonalSq)
        if (diagonalSq > maxDiagonal) {
            maxDiagonal = diagonalSq;
            maxArea = area;
        } else if (diagonalSq === maxDiagonal) {
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }

    return maxArea;
}

console.log(largestRectangleArea([[2,3], [4,5], [7,8]]))