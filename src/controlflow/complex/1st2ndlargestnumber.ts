const numsArr: number[] = [65,75,35,5,95];
let first = -Infinity, second = -Infinity;

for (let n of numsArr) {
    if (n > first) {
        second = first;
        first = n;
    } else if (n > second && n !== first) {
        second = n;
    }
}
console.log("first largest:", first);