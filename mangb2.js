let size;
do {
    size = Number(prompt('size'));
} while (isNaN(size) || size > 10);
let listnumbers = new Array(size);
var number;
listnumbers[0] = Math.floor(Math.random() * (50 - 40 + 1) + 40);
for (let i = 1; i < listnumbers.length; i++) {
    let j = 0;
    while (j <= i) {
        number = Math.floor(Math.random() * (50 - 40 + 1) + 40);
        for (j = 0; j <= i; j++) {
            if (number == listnumbers[j]) {
                break;
            }
            if (i == j) {
                listnumbers[i] = number;
            }
        }
    }
}
document.write(listnumbers);