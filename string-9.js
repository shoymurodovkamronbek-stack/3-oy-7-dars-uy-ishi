let str = "Dunyo seni togangmas!";
let obj = {};
//dunyo seni tog'angmas: hazlkash!*
for (let i = 0; i < str.length; i++) {
    let s = str[i];

    if (obj[s]) {
        obj[s]++;
    } else {
        obj[s] = 1;
    }
}

let max = 0;
let result = "";

for (let s in obj) {
    if (obj[s] > max || (obj[s] == max && s < result)) {
        max = obj[s];
        result = s;
    }
}

console.log(result, max);