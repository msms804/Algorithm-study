const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();

//console.log(input)

const n = +input[0];
console.log(n);

//let a = input[1];
//a = a.split(" ").join("");
let arr = input.split('\n')[1].trim().split(" ").map(Number);

// let arr = Array(a).fill(0);
// console.log(arr)
let left = 0;
let right = 0;
let ret = 5;
/**
 * 1 2 3 4 5
 * 
 * 1 2 3 1 2
 * 
 * 잠만..
 * 1 2 3 2 1일때
 * 1 2 3 2 는 안되는데?
 * 
 * 등차수열의 합 공식:
 * n(n + 1) / 2
 * 힌트 : cnt 배열
 */
for (let i = 0; i < arr.length; i++) {
    left = i;
    for (let j = i + 1; j < arr.length; j++) {
        right = j;
        console.log("left: ", left, "right: ", right);
        if (arr[left] === arr[right]) {

            break;
        }
        console.log("arr[left]: ", arr[left], "arr[right] ", right[j]);
        ret++;
    }
}
console.log(ret);