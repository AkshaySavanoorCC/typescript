"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe('reverse function', function () {
    it('should reverse an array', function () {
        var input = [1, 2, 3];
        var expected = [3, 2, 1];
        var result = (0, index_1.reverse)(input);
        expect(result).toEqual(expected);
    });
    it('should reverse a string', function () {
        var input = 'hello';
        var expected = 'olleh';
        var result = (0, index_1.reverse)(input);
        expect(result).toEqual(expected);
    });
    it('should throw an error for an invalid argument type', function () {
        var input = 123;
        expect(function () {
            (0, index_1.reverse)(input);
        }).toThrowError('Invalid argument type');
    });
});
describe('capital function', function () {
    it('should be capitalize string', function () {
        var input = 'hii! how are you?';
        var expected = 'Hii! how are you?';
        var result = (0, index_1.capitalize)(input);
        expect(result).toEqual(expected);
    });
});
describe('title function', function () {
    it('should be title case', function () {
        var input = 'hii! how are you?';
        var expected = 'Hii! How Are You?';
        var result = (0, index_1.toTitleCase)(input);
        expect(result).toEqual(expected);
    });
});
