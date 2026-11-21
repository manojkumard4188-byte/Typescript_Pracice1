function fullName(first: string, last?: string): string 
{
  return last ? `${first} ${last}` : first;
}
console.log(fullName("John" ,"mick"));

function greetUser(name: string, title?: string): string 
{
  if (title) return `Hello, ${title} ${name}`;
  return `Hello, ${name}`;

}

console.log(greetUser("Ravi", "Mr"));

function calcTotal(price: number, tax?: number, discount?: number): number
 {
  let total = price;
  if (tax) total += (price * tax) / 100;
  if (discount) total -= (price * discount) / 100;
  return total;

}
console.log("Total:", calcTotal(1000, 18, 5));

function joinParts(...parts: (string | undefined)[]): string 
{
  let result = "";
  for (const part of parts) {
    if (part) result += part + " ";

  }
  return result.trim();

}
console.log(joinParts("type","script",undefined,"pratice"));

function findInarray (nums:number[],target?:number):number | string 
{
    if(target===undefined) return "no target given";
    for(const n of nums){
        if(n===target) return n;

}
return "not found";

}
console.log (findInarray([1,2,3,4],4));

function describeNumber(n:number,label?: string):string
{
    const type = n % 2 === 0?"even":"odd";
    return label?`${label}: ${n} is ${type}`:`${n} is ${type}`;


    }
console.log(describeNumber(10,"find"));