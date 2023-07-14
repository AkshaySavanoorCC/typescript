"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
/**
 * Calculates the sum of numbers.
 * @param numbers The numbers to be summed.
 * @returns The sum of the numbers.
 */
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, current) { return total + current; }, 0);
}
exports.sum = sum;
