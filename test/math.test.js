"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe('calc function', function () {
    it('should calculate the expression', function () {
        var expected = 10;
        var result = (0, index_1.sum)(1, 2, 3, 4);
        expect(result).toEqual(expected);
    });
});
