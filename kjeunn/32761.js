/**
 * https://www.acmicpc.net/problem/32761
 * 첫 번째 줄에 타일의 개수를 나타내는 정수 N이 주어진다.
 * 두 번째 줄에 타일에 적힌 가위바위보 문자를 원형인 시계 방향으로 읽었을 때 나타나는 문자열 S가 주어진다.
 * S는 길이가 N인 문자열이며 문자 S, R, P 만으로 구성되어 있다.
 * 타일을 적절히 제거하여 조건을 만족하는 타일이 1개 이상 남도록 할 수 있음이 보장되는 입력만 주어진다.
 */

const fs = require("fs");

// 1. 입력 처리
const input = fs.readFileSync(0, "utf8").split(/\s+/).filter(Boolean);
const N = parseInt(input[0]);
const S = input[1];

// 2. 세 가지 가능한 순환 시작 패턴
const patterns = [
  ["R", "S", "P"],
  ["S", "P", "R"],
  ["P", "R", "S"],
];

let maxStay = 0;

patterns.forEach((pattern) => {
  let count = 0;
  let state = 0; // 0, 1, 2 (패턴의 인덱스)

  // 문자열을 한 바퀴 돌며 해당 패턴이 몇 번 완성되는지 확인
  for (let i = 0; i < N; i++) {
    if (S[i] === pattern[state]) {
      state++;
      if (state === 3) {
        count += 3;
        state = 0;
      }
    }
  }
  if (count > maxStay) maxStay = count;
});

// 3. 결과: 전체 - 최대로 남길 수 있는 타일 수
console.log(N - maxStay);
