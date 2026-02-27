/**
 * https://www.acmicpc.net/problem/2163
 * 초콜릿의 크기가 주어졌을 때, 이를 1×1 크기의 초콜릿으로 쪼개기 위한 최소 쪼개기 횟수를 구하는 프로그램을 작성하시오.
 * 첫째 줄에 두 정수 N, M(1 ≤ N, M ≤ 300)이 주어진다.
 * 초콜릿을 1×1 크기의 초콜릿으로 쪼개기 위한 최소 쪼개기 횟수를 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

console.log(N * M - 1);
