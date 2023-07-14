/**
 * Calculates the sum of numbers.
 * @param numbers The numbers to be summed.
 * @returns The sum of the numbers.
 */
export function sum(...numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

