/**
 * https://www.acmicpc.net/problem/16205
 * 주어진 단어를 변환하는 프로그램
 * 1. CamelCase: 첫 단어 소문자, 이후 단어 첫글자만 대문자
 * 2. Snake Case: 모든 단어 소문자, 언더바(_)로 연결
 * 3. Pascal Case: 모든 단어 첫글자 대문자
 *
 * 첫째 줄에 사용한 표기법의 번호와 변수명이 주어진다. 번호가 1인 경우는 카멜 표기법, 2인 경우는 스네이크 표기법, 3인 경우는 파스칼 표기법이다.
 * 첫째 줄에 카멜 표기법을 사용한 경우, 둘째 줄에 스네이크 표기법을 사용한 경우, 셋째 줄에 파스칼 표기법을 사용한 경우를 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const type = parseInt(input[0]);
const keyword = input[1];

// 단어들을 배열로 분리하는 함수
function getWords(type, keyword) {
  if (type === 1) {
    // CamelCase
    return keyword.split(/(?=[A-Z])/).map((w) => w.toLowerCase());
  } else if (type === 2) {
    // snake_case
    return keyword.split("_");
  } else {
    // PascalCase
    return keyword.split(/(?=[A-Z])/).map((w) => w.toLowerCase());
  }
}

const words = getWords(type, keyword);

// 1. Camel Case: 첫 단어 소문자, 이후 단어 첫글자만 대문자
const camel = words.map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");

// 2. Snake Case: 모든 단어 소문자, 언더바(_)로 연결
const snake = words.join("_");

// 3. Pascal Case: 모든 단어 첫글자 대문자
const pascal = words.map((w) => w[0].toUpperCase() + w.slice(1)).join("");

console.log(camel);
console.log(snake);
console.log(pascal);
