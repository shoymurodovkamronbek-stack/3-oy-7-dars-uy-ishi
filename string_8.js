let str = "example";
let k = 2;
let s = "k";
let result = "";

for (let i = 0; i < str.length; i++) {
    if (i % k == 0) {
        result += s;
    } else {
        result += str[i];
    }
}

console.log(result);