/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * */
 export class BinaryMatrix {
    /**
     * @param {number[][]}
     */
    matrix;
    constructor(matrix) {
       this.matrix = matrix;
    }
     /**
      * @param {integer} row, col
     * @return {integer}
     */
     get(row, col) {
         return this.matrix[row][col];
     };

     /**
      * @return {[integer, integer]}
      *
      */
     dimensions() {
         // row, cols
         return [this.matrix.length, this.matrix[0].length]
     };
 };
