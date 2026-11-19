const isEvenNum = function (n: number): boolean {
  return n % 2 === 0;
};
console.log("E5 Even:", isEvenNum(10));

const evenOrOdd = function (n: number): string {
  if (n % 2 === 0) return "Even";
  return "Odd";
};

console.log(evenOrOdd(8), evenOrOdd(5));


const getGrade = function (marks: number): string {
  switch (true) {
    case marks >= 90: return "A";
    case marks >= 75: return "B";
    case marks >= 50: return "C";
    default: return "F";
  }
};

console.log("Grade:", getGrade(80));

const sumUpTo = function (n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
};
console.log("Sum:", sumUpTo(5));

const findMaxNum = function (nums: number[]): number {
  let max = nums[0];
  for (const n of nums) {
    if (n > max) max = n;
  }
  return max;
};
console.log("Max:", findMaxNum([4, 9, 2, 7]));

const countVowelsInText = function (text: string): number {
  let count = 0;
  for (const ch of text) {
    if ("aeiouAEIOU".includes(ch)) count++;
  }
  return count;
};


console.log("Vowels:", countVowelsInText("Hello"));
