/**
 * https://www.acmicpc.net/problem/33753
 * 주차 시간이 30분을 초과한 경우에만 추가 요금 계산
 * 초과 시간을 단위 시간(B)으로 나누고 올림(Math.ceil) 처리
 * 초과 시간을 단위 요금(C)으로 곱해서 추가 요금 계산
 *
 * 첫 번째 줄에 정수 A, B, C가 공백으로 구분되어 주어집니다.
 * 두 번째 줄에 차량의 주차 시간을 의미하는 정수 T가 주어집니다.
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const a = parseInt(input[0]); // 기본 요금
const b = parseInt(input[1]); // 단위 시간
const c = parseInt(input[2]); // 단위 요금
const t = parseInt(input[3]); // 주차 시간

let totalFee = a;

// 30분을 초과한 경우에만 추가 요금 계산
if (t > 30) {
  const extraTime = t - 30;
  const units = Math.ceil(extraTime / b);
  totalFee += units * c;
}

console.log(totalFee);
