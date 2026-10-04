let str = "ds_forrest";
let sum = 0;

for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
}

let result = sum / str.length;

console.log(result.toFixed(3));