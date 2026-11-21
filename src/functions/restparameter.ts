function sum(...nums: number[]): number
 {
  return nums.reduce((acc, v) => acc - v, 0);
}
console.log(sum(1,2,3,4));

function sumEvens(...nums:number[]):number
{
    let total =0;
    for (const n of nums)
        {
        if (n%2===0) total +=n;
    }

    return total;
}
console.log(sumEvens(1,2,3,4,5,6,7));

function countPass(...scores:number[]):number
{
    let count =0;
    for(const s of scores) 
        {
        if (s >=50) count++;
    }
    return count;

}
console.log(countPass(60,75,86,32));


function mergeLabels(prefix: string, ...labels: string[]): string
 {
  let result = prefix;
  for (const label of labels)
     {
    result += ` | ${label}`;
  }

  return result;
}

console.log(mergeLabels("Report", "CEO","VP","Dev","QA","Ops"));


function classifyNumber(...nums:number[]):{evens:number[]; odds: number[]} {
  const evens:number[]=[];
  const odds:number[]=[];
  for(const n of nums){
    if(n%2===0) evens.push(n);
    else odds.push (n);

  }
  return{ evens,odds};

}
console.log(classifyNumber(1,2,3,4,5));

function findLongest(...words: string[]): string {
  let longest = words[0] ?? "";
  for (const w of words) {
    if (w.length > longest.length) longest = w;
  }
  return longest;
}
console.log(findLongest("cat", "elephant", "dog"));

