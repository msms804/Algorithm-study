const fs = require('fs');
let input = fs.readFileSync('./input2.txt').toString();
/**'/dev/stdin' */
//필요한 변수
const res = Array(101).fill(0);

//입력정제
input = input.split('\n');
const costNum = input[0].split(' ').map((item) => Number(item));
const [A, B, C] = costNum;
let ret = 0;

for (let i = 1; i <= input.length - 1; i++) {
    const arr = input[i].split(' ').map((item) => +item);
    const [startT, endT] = arr;

    for (let i = startT; i < endT; i++) {
        res[i]++;
    }
}
res.forEach(item => {
    if (item == 0) return;
    if (item == 1) {
        ret += (item * A);
    } else if (item == 2) {
        ret += (item * B);
    } else if (item == 3) {
        ret += (item * C);
    }
})
console.log(ret);

//문제풀이

/**
 * 알고리즘
 * 누적합
 * 1. for(int i = sT ; i < eT; i++){
 *          res[i]++;
 *      }
 * 1. st~et을 인덱스로하여 해당인덱스의 값을 ++
 * 2. res배열을 for each문으로 다 돌면서
 * 3. 값 == 3 --> 값 * C
 *    값 == 2 --> 값 * B
 *    값 == 1 --> 값 *A
 */
