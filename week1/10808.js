//알파벳 개수
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
const result = Array(26).fill(0);
let res = "";

//foreach 쓰는방법 있을까?
for (let i = 0; i < input.length; i++) {
    result[input[i].charCodeAt() - 97]++;
}

for (let i = 0; i < 26; i++) {
    res += result[i] + " ";
}
console.log(res.trim());
/**
 * 알고리즘
 * 누적합
 * 1. 알파벳을 아스키코드로 전환
 * 2. 변환한 아스키코드 - 97을 인덱스로 값에 저장
 * 3. 해당하는거에 ++
 */