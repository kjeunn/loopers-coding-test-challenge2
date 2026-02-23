const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];

let res = 'unrated'
for(let i = 0; i < input.length-1; i++){
    const char = input[i]
    if((char === 'd' || char === 'D') && input[i+1] === '2'){
        res = 'D2'
        break
    }
}

console.log(res);