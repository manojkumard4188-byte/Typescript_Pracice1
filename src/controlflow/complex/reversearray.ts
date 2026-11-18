export {};

const arr: number[] = [20,30,40,50,60];
let reversed: number[] = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);