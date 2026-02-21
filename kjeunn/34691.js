/**
 * https://www.acmicpc.net/problem/34691
 * 첫째 줄부터 한 줄에 하나씩 문자열이 주어진다.
  입력되는 문자열은 animal, tree, flower, end 중 하나이며, end는 입력의 마지막 줄에만 항상 주어진다. end는 질문이 아니며, 처리하지 않는다.
  질문은 1회 이상 주어지며, 1,000회 이상 주어지지 않는다.
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const str = input[i].trim();

  if (str === "end") break;

  if (str === "animal") {
    console.log("Panthera tigris");
  } else if (str === "tree") {
    console.log("Pinus densiflora");
  } else if (str === "flower") {
    console.log("Forsythia koreana");
  }
}
