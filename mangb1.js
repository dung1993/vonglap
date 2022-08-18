let size;
do {
    size = Number(prompt('size'));
} while (isNaN(size));
let listnumbers = new Array(size)
for (let i = 0; i < listnumbers.length; i++) {
    listnumbers[i] = Math.floor(Math.random() * (30 - 20 + 1) + 20);
}
let n = Number(prompt('check n'));
count = 0;
for (let i = 0; i < listnumbers.length; i++) {
    if (listnumbers[i] == n) {
        count += 1;
        break;
    }
}
if (count == 0) {
    document.write(listnumbers)
    document.write("<br>")
    document.write(`${n} không có trong dãy`)
} else {
    document.write(listnumbers)
    document.write("<br>")
    document.write(`${n} có trong dãy`)
}