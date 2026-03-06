/**
 * https://www.acmicpc.net/problem/34760
 * 1번째 코끼리부터 15번째 코끼리까지 순서대로 앞으로 돌진하기 시작한다. 쿠는 코끼리의 돌진을 멈추기 위해, 길이가 정수인 당근 한 개로 길을 막으려고 한다.
 * 코끼리는 당근을 보고 다음과 같은 행동을 한다.
 * 당근의 길이가 코의 길이보다 작다면, 당근을 먹어 치우고 계속 돌진한다.
 * 당근의 길이가 코의 길이와 같다면, 당근을 먹어 치우고 잠에 든다.
 * 당근의 길이가 코의 길이보다 크다면, 겁을 먹고 기절한다.
 * 만약 당근이 없다면, 계속 돌진한다.
 * 잠에 들거나 기절한 코끼리는 이후에 돌진하는 코끼리에 영향을 주지 않는다.
 * 모든 코끼리의 돌진을 멈추기 위해, 필요한 당근의 최소 길이를 구해보자.
 *
 * 마지막 코끼리 코의 길이가 가장 긴 경우에는 당근의 최소길이와 같다.
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").split(/\s+/).filter(Boolean).map(Number);

const maxFront = Math.max(...input.slice(0, 14));
const lastNose = input[14];

if (lastNose > maxFront) {
  console.log(lastNose);
} else {
  console.log(maxFront + 1);
}
