/**팰린드롬 '/dev/stdin' */
const fs = require('fs');
let input = fs.readFileSync('./input3.txt').toString();

let flag = false;

for (let i = 0; i < Math.floor(input.length / 2) - 1; i++) {
    if (input[i] == input[input.length - i - 1]) {
        flag = true;
    } else {
        flag = false;
        break;
    }

}
if (flag) {
    console.log("1");
} else {
    console.log("0");
}
/**
 * 알고리즘
 * l e v e l
 *
 * 0 1 2 3 4
 *
 * n o o n
 * 0 1 2 3
 *  i       length - i
 * 1. 하나씩검사해서
 * 2. 만약 맞으면 넘어가고
 * 3. 틀리면 break하고 0출력
 * 4. 끝까지 살아남으면 1출력
 * 5. 글자수 홀수 / 짝수인거 상관있나..?
 */