// Check if the number is pair (true) or odd (false)
export const isPair = (num: number): boolean => num % 2 === 0

// Return a random item from an array
export function getRandomArrayItem<T>(array: Array<T>) {
    return array[Math.floor(Math.random() * array.length)]
}
