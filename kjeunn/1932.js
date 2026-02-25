/**
 * https://www.acmicpc.net/problem/1932
 * 첫째 줄에 삼각형의 크기 n(1 ≤ n ≤ 500)이 주어지고, 둘째 줄부터 n+1번째 줄까지 정수 삼각형이 주어진다.
 * 첫째 줄에 합이 최대가 되는 경로에 있는 수의 합을 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const dp = input.slice(1).map((v) => v.split(" ").map(Number));

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let upRight = dp[i - 1][j] || 0;
    let upLeft = dp[i - 1][j - 1] || 0;

    dp[i][j] += Math.max(upRight, upLeft);
  }
}

console.log(Math.max(...dp[n - 1]));
