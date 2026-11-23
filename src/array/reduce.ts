const words: string[] = ["Hello", " ", "World"];
const sentence = words.reduce(function (acc, word) 
{
  return acc + word;
}, "");

console.log("Sentence:", sentence);


const marks: number[] = [80, 90, 75, 85];
const average = marks.reduce(function (acc, mark, _, arr) 
{
  return acc + mark / arr.length;
}, 0);

console.log("Average:", average);
