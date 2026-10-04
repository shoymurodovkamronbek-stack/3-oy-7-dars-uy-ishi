let a = "robocontest";
let b = "codeforces";

let count = 0;

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            count++;
            break;
        }
    }
}

console.log(count);