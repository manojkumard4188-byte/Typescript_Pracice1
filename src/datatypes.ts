// object with full type

// let students :{
//     name:"giri"
//     age:24
//     ispass:true
// };
// console.log(students);

// array of object

// let team:{user:string;role:string}[]=[
//     {user:"giri",role:"dev"},
//     {user:"manoj",role:"testing"}

// ];
// console.log(team);

// function type variables

// let greetfunc:(x:string)=> void;
// greetfunc=(x:string)=>console.log("Hi",x);
// greetfunc("giri");

// enum with string values
// enum role {admin="ADMIN",user="USER"}
// let manojrole:role=role.admin;
// console.log(manojrole);

// Using let inside block scope

// var scope =50;
// if (true){
//     var scorpe =80;
// }
// console.log(scorpe);

// set usages

let giriSet = new Set <string>();
giriSet.add("giri");
giriSet.add("manoj");
console.log(giriSet);

// map usage

let girimap=new Map<string,number>();
girimap.set("marks",90);
console.log(girimap);

// type alias with array

type Skills = string[];
let giriSkills: Skills = ["TS", "JS", "Node"];
console.log(giriSkills);

// Partial type

interface Laptop {
  brand: string;
  price: number;
}
let lap: Partial<Laptop> = { brand: "Dell",price:45000};
console.log(lap);

// keyof usage

type Person = { name: string; age: number };
let key: keyof Person = "name,age";
console.log(key);


// Function narrowing

function printValue(v: number | string) {
  if (typeof v === "string") {
    console.log("String:", v);
  } else {
    console.log("Number:", v);
  }
}
printValue("Manoj");

// Generic function

function wrap<T>(value: T): T[] {
  return [value];
}
console.log(wrap("manoj,nouz,giri"));

// Generic interface

interface ApiResponse<T> {
  status: number;
  data: T;
}
let apiRes: ApiResponse<string> = {
  status: 200,
  data: "Success"
};
console.log(apiRes);

// Deep merge generic

function mergeObj<T, U>(a: T, b: U) {
  return { ...a, ...b };
}
console.log(mergeObj({ name: "Giri" }, { age: 24 }));

// Complex union array

let mixData: (string | number | boolean)[] = ["Giri", 100, true];
console.log(mixData);

// Object array with types

let tasks: { id: number; title: string; done: boolean }[] = [
  { id: 1, title: "TS", done: false },
  { id: 2, title: "Practice", done: true }
];
console.log(tasks);

// Multi-line function with const + let

function calculate(a: number, b: number) {
  const sum = a + b;
  let result = sum * 2;
  return result;
}
console.log(calculate(10, 20));

// Optional chaining

let empData: { name: string; address: { city?: string } | null } = {
  name: "TS",
  address: null
};
console.log(empData.name,empData.address?.city);

// Nullish coalescing

let nullableInfo: string | null = null;
let info = nullableInfo ?? "Default Value";
console.log(info);

// type assertion

let code:any ="123";
let numValue=code as string;
console.log (numValue);


