/**
 * https://www.acmicpc.net/problem/29615
 * 첫 번째 줄에 대기 명단에 적힌 수의 개수 N과 민규 친구의 수 M이 공백으로 구분되어 주어진다. (1 <= M <= N <= 1,000)
 * 두 번째 줄에 대기 명단에 적힌 N개의 정수가 주어진다.
 * 세 번째 줄에 민규 친구의 대기 번호를 나타내는 M개의 정수가 주어진다.
 * 모든 친구들이 먼저 입주할 수 있도록 명단을 바꾸는 최소 횟수를 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N: 전체 대기자 수, M: 민규 친구의 수
const [N, M] = input[0].split(" ").map(Number);
const waitingList = input[1].split(" ").map(Number);
const targetFriends = new Set(input[2].split(" ").map(Number));

let countInFront = 0;
for (let i = 0; i < M; i++) {
  if (targetFriends.has(waitingList[i])) {
    countInFront++;
  }
}

console.log(M - countInFront);
