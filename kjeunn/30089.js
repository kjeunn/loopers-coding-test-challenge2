/**
 * https://www.acmicpc.net/problem/30089
 * $T$개의 줄마다 영어 대문자로만 이루어진 문자열 S가 주어질 때, 각 줄마다 아래 조건을 모두 만족하는 문자열 X를 출력하여라.
 * X는 S로 시작하여야 한다.
 * X를 뒤에서부터 읽은 문자열 X'에 대해서도 S로 시작하여야 한다.
 * 위 조건을 만족하는 문자열이 여러 가지라면, 가장 길이가 짧은 문자열이 X가 된다.
 * 가능한 모든 S에 대해서 조건을 만족하는 X는 유일함을 증명할 수 있다.

 * 첫 번째 줄에 주어지는 문자열의 개수 T가 주어진다. (1 <= T <= 100)
 * 두 번째 줄부터 T개의 줄에 걸쳐 문자열 S가 주어진다. 각 줄마다 주어지는 문자열 S의 길이는 1이상 20이하이다.

 * 각 줄마다 조건을 만족하는 문자열 X를 출력한다.
 */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const testCaseCount = parseInt(input[0]);

for (let t = 1; t <= testCaseCount; t++) {
  const originalText = input[t].trim(); // 입력받은 원본 문자열
  const textLength = originalText.length;

  let palindromeSuffixStart = 0;

  // 1. 문자열의 뒷부분(Suffix) 중에서 가장 긴 팰린드롬 구간 찾기
  for (let i = 0; i < textLength; i++) {
    // 앞에서부터 한 글자씩 제외하며 남은 뒷부분을 확인
    const suffixCandidate = originalText.substring(i);

    if (isPalindrome(suffixCandidate)) {
      palindromeSuffixStart = i; // 가장 긴 팰린드롬 접미사의 시작 지점 저장
      break;
    }
  }

  // 2. 팰린드롬이 아닌 앞부분(Prefix)을 추출
  const nonPalindromePrefix = originalText.substring(0, palindromeSuffixStart);

  // 3. 앞부분을 뒤집어서 뒤에 붙일 준비
  const reversedPrefix = nonPalindromePrefix.split("").reverse().join("");

  // 4. 원본 문자열 + 뒤집힌 앞부분 = 가장 짧은 팰린드롬 완성
  console.log(originalText + reversedPrefix);
}

/**
 * 주어진 문자열이 팰린드롬(앞뒤가 똑같은지)인지 판별하는 함수
 */
function isPalindrome(text) {
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
