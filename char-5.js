let str = "a";

let code = str.charCodeAt(0);

if (code >= 97 && code <= 122) {
    console.log(String.fromCharCode(code - 32));
} else {
    console.log(String.fromCharCode(code + 32));
}