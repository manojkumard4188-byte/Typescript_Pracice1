export {};

const nums: number[] = [-25,35,-45,-67,87,0];
let positive = 0, negative = 0, zero = 0;

for (let n of nums) {
    if (n > 0) positive++;
    else if (n < 0) negative++;
    else zero++;
}
console.log(`Positive:${positive}, Negative:${negative}, Zero:${zero}`);