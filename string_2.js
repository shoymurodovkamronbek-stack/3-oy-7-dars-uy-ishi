let str = "18fF.";
let raqam = 0;
let harf = 0;
let belgi = 0;

for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 48 && code <= 57) {
        raqam++;
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        harf++;
    } else {
        belgi++;
    }
}

console.log(raqam, harf, belgi);