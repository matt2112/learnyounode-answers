//  Write a program that accepts one or more numbers as command-line arguments
//  and prints the sum of those numbers to the console (stdout).

const args = process.argv.slice(2);
const sum = args.reduce((a, b) => Number(a) + Number(b));
console.log(sum);