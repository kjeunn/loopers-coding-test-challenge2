/**
 * https://www.acmicpc.net/problem/2597
 * 첫째 줄에 줄자의 길이가 입력된다. 줄자의 길이는 10㎝ 이상, 1,000㎝ 이하이고 단위를 나타내는 ㎝은 입력되지 않는다.
 * 둘째 줄에는 두 빨간 점의 위치를 나타내는 정수가 빈칸을 사이에 두고 입력된다.
 * 셋째 줄에는 두 파란 점의 위치가, 넷째 줄에는 두 노란 점의 위치를 나타내는 정수가 빈칸을 사이에 두고 입력된다.
 * 모든 점들의 위치는 서로 다르다.
 * 줄자에서 빨간 점을 뽑아내면 빨간 점 사이의 거리가 최대가 되는 경우, 줄자에서 파란 점을 뽑아내면 파란 점 사이의 거리가 최대가 되는 경우, 줄자에서 노란 점을 뽑아내면 노란 점 사이의 거리가 최대가 되는 경우를 찾아내는 프로그램을 작성하시오.
 * 한 줄에 접은 후의 줄자의 길이를 소수점 이하 한자리까지 출력한다. 소수점 이하 한자리가 0 이면 0 도 출력한다.(예 4.0)
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split(/\s+/).filter(Boolean).map(Number);

let length = input[0]; // 초기 줄자 길이
let points = [
  [input[1], input[2]], // 빨강
  [input[3], input[4]], // 파랑
  [input[5], input[6]], // 노랑
];

let left = 0;
let right = length;

// 세 쌍의 점(빨강, 파랑, 노랑)에 대해 순차적으로 처리
for (let i = 0; i < 3; i++) {
  let [p1, p2] = points[i];

  // 두 점이 같은 위치에 있으면 접지 않고 패스
  if (p1 === p2) {
    continue;
  }

  // 1. 접는 지점(중점) 계산
  const mid = (p1 + p2) / 2;

  // 2. 모든 점들의 좌표를 새로운 기준(mid)으로 재계산
  // 접은 지점을 0으로 만들고 대칭이동시킨 뒤 절대값을 취함
  for (let j = i; j < 3; j++) {
    points[j][0] = Math.abs(points[j][0] - mid);
    points[j][1] = Math.abs(points[j][1] - mid);
  }

  // 3. 줄자의 양 끝점(left, right)도 새로운 기준(mid)으로 재계산
  const newLeft = Math.abs(left - mid);
  const newRight = Math.abs(right - mid);

  // 4. 줄자는 이제 0부터 시작해서 더 긴 쪽까지의 길이를 가짐
  left = 0;
  right = Math.max(newLeft, newRight);
}

// 최종 결과 출력 (소수점 첫째 자리까지)
console.log(right.toFixed(1));
