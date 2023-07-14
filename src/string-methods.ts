/**
 * Reverses an array or a string.
 * @param args The array or string to be reversed.
 * @returns The reversed array or string.
 * @throws {Error} If the argument type is invalid.
 */
function reverse(args: unknown): unknown {
    if (Array.isArray(args)) {
      let result: unknown[] = [];
      for (let i = args.length - 1; i >= 0; i--) {
        result.push(args[i]);
      }
      return result;
    } else if (typeof args === 'string') {
      let result: string = '';
      for (let i = args.length - 1; i >= 0; i--) {
        result += args[i];
      }
      return result;
    } else {
      throw new Error('Invalid argument type');
    }
  }
  
  /**
   * Capitalizes the first letter of a string.
   * @param args The string to be capitalized.
   * @returns The capitalized string.
   * @throws {Error} If the argument type is invalid.
   */
  function capitalize(args: string): string {
    console.assert(typeof args === 'string', 'Invalid argument');
    return args[0].toUpperCase() + args.slice(1);
  }
  
  /**
   * Converts a string to title case.
   * @param input The string to be converted to title case.
   * @returns The string converted to title case.
   * @throws {Error} If the argument type is invalid.
   */
  function toTitleCase(input: string): string {
    console.assert(typeof input === 'string', 'Invalid argument');
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
      return match.toUpperCase();
    });
  }
  
  export { reverse, capitalize, toTitleCase };
  