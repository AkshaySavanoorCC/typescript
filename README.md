## Installation

```bash
npm install @akshay12/type-script
```

```bash
const { reverse, capitalize, toTitleCase } = require('@akshay12/type-script');

const reversed = reverse([1, 2, 3, 4, 5]);
console.log(reversed); // Output: [5, 4, 3, 2, 1]

const capitalized = capitalize('hello');
console.log(capitalized); // Output: 'Hello'

const titleCase = toTitleCase('hello world');
console.log(titleCase); // Output: 'Hello World'
```
### Reverses an array or a string.
reverse(args: unknown): unknown

- args (unknown): The array or string to be reversed.
- Returns (unknown): The reversed array or string.

### Capitalizes the first letter of a string.
capitalize(args: string): string

- args (string): The string to be capitalized.
- Returns (string): The capitalized string.

### Converts a string to title case.
toTitleCase(input: string): string

- input (string): The string to be converted to title case.
- Returns (string): The string converted to title case.
