// function evenOrOdd(n:number): string{
//     if(n % 2 === 0) return "even";
//     return "odd";
// }
// console.log("M1 EvenOrOdd:", evenOrOdd(10), evenOrOdd(7));

function checkPass(score: number): string {
  return score >= 50 ? "Pass" : "Fail";
}
console.log("M2 Pass:", checkPass(75), checkPass(30));

function getGrade(marks: number): string {
  switch (true) {
    case marks >= 90: return "A";
    case marks >= 75: return "B";
    case marks >= 50: return "C";
    default: return "F";
  }
}
console.log("M3 Grade:", getGrade(92), getGrade(55));

function sumUpTo(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}
console.log("M4 SumUpTo:", sumUpTo(5));

function greetByName(name: string): string {
  return `Hello, ${name}`;
}
console.log("M5 Greet:", greetByName("Sapthagiri"));

function isPositiveNum(n: number): boolean {
  return n > 0;
}
console.log("M6 Positive:", isPositiveNum(5), isPositiveNum(-2));