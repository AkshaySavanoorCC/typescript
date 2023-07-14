import { sum } from '../src/simple-functions';

describe('calc function', () => {
    it('should calculate the expression', () => {
      const expected = 10;
      const result = sum(1,2,3,4);
      expect(result).toEqual(expected);
    });
});