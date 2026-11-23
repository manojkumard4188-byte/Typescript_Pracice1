let total = 0;
const prices: number[] = [100, 250, 75, 300];
prices.forEach(function (price)
 {
  total += price;
});

console.log("Total Price:", total);

let evenCount = 0;
const values: number[] = [1, 4, 7, 8, 10, 3];
values.forEach(function (n)
 {
  if (n % 2 === 0) evenCount++;
});

console.log("Even Count:", evenCount);