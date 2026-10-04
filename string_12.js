let s = "Nechta belgi borligini hisoblang";

if (s.endsWith("\n")) s = s.slice(0, -1);
if (s.endsWith("\r")) s = s.slice(0, -1);

console.log(s.length);