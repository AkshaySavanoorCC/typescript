import { reverse, capitalize, toTitleCase } from '../src/simple-functions';

describe('reverse function', () => {
  it('should reverse an array', () => {
    const input = [1, 2, 3];
    const expected = [3, 2, 1];
    const result = reverse(input);
    expect(result).toEqual(expected);
  });

  it('should reverse a string', () => {
    const input = 'hello';
    const expected = 'olleh';
    const result = reverse(input);
    expect(result).toEqual(expected);
  });

  it('should throw an error for an invalid argument type', () => {
    const input = 123;
    expect(() => {
      reverse(input);
    }).toThrowError('Invalid argument type');
  });
});

describe('capital function', () => {
    it('should be capitalize string', () => {
      const input = 'hii! how are you?';
      const expected = 'Hii! how are you?';
      const result = capitalize(input);
      expect(result).toEqual(expected);
    });
});

describe('title function', () => {
    it('should be title case', () => {
      const input = 'hii! how are you?';
      const expected = 'Hii! How Are You?';
      const result = toTitleCase(input);
      expect(result).toEqual(expected);
    });
});