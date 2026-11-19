const evenOrOdd = (n: number): string => {
  if (n % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log("EvenOrOdd:", evenOrOdd(5), evenOrOdd(7));


const checkPass = (score: number): string =>
  score >= 50 ? "Pass" : "Fail";
console.log("CheckPass:", checkPass(75), checkPass(30));


const getGrade = (marks: number): string => {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 75:
      return "B";
    case marks >= 50:
      return "C";
    default:
      return "F";
  }
};
console.log("Grade:", getGrade(92), getGrade(60), getGrade(40));


const sumUpTo = (n: number): number => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i;
  }
  return total;
};
console.log("SumUpTo:", sumUpTo(5)); 


const countDigits = (num: number): number => {
  let n = Math.abs(num);
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count === 0 ? 1 : count;
};
console.log("CountDigits:", countDigits(12345), countDigits(0));



const findMaxNum = (nums: number[]): number => {
  let max = nums[0];
  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }
  return max;
};
console.log("FindMax:", findMaxNum([3, 9, 1, 7, 5]));



const getPositives = (nums: number[]): number[] => {
  const result: number[] = [];
  for (const n of nums) {
    if (n > 0) {
      result.push(n);
    }
  }
  return result;
};
console.log("Positives:", getPositives([-2, 5, 0, 8, -1, 3]));



const countVowelsInText = (text: string): number => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const ch of text) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  return count;
};
console.log("Vowels:", countVowelsInText("software engineer"));



type SimplePerson = { name: string; age: number };

const checkAdult = (person: SimplePerson): string => {
  if (person.age >= 18) {
    return `${person.name} is Adult`;
  }
  return `${person.name} is Minor`;
};
console.log("Adult:", checkAdult({ name: "John", age: 25 }));
console.log("Adult:", checkAdult({ name: "Amy", age: 15 }));

