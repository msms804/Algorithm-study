/**팰린드롬 '/dev/stdin' */
const fs = require('fs');
let input = fs.readFileSync('./input3.txt').toString().trim();

console.log(input);
console.log(input.split(""));
console.log(input.split("").reverse());
console.log(input.split("").reverse().join(""));

const reverse = input.split("").reverse().join("")
if (reverse === input) {
    console.log("1");
} else {
    console.log("0");
}

let left = 0
let right = input.length - 1;
let flag = 0;
/**
 * 투포인터
 * 
 */
while (left < right) {
    if (input[left] !== input[right]) {
        flag = 1;
        break;
    }
    left++;
    right--;
}

if (flag) {
    console.log("0");
}
else {
    console.log("1");
}