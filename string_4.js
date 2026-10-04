let str = "Dasturchilar Klubi";

if (str.endsWith("\n")) str = str.slice(0, -1);
if (str.endsWith("\r")) str = str.slice(0, -1);

console.log(str.length)