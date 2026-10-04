let str = "1b2B.";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 48 && code <= 57) {
        count++;
    }
}

console.log(count);