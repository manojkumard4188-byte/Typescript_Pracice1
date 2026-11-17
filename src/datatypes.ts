// object with full type

let students :{
    name:"giri"
    age:24
    ispass:true
};
console.log(students);

// array of object

let team:{user:string;role:string}[]=[
    {user:"giri",role:"dev"},
    {user:"manoj",role:"testing"}

];
console.log(team);

// function type variables

let greetfunc:(x:string)=> void;
greetfunc=(x:string)=>console.log("Hi",x);
greetfunc("giri");

// enum with string values

enum role {admin="ADMIN",user="USER"}
let manojrole:role=role.admin;
console.log(manojrole);

// Using let inside block scope

var scope =50;
if (true){
    var scorpe =80;
}
console.log(scorpe);

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
let key: keyof Person = "name";
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


// HIGH LEVEL TYPESCRIPT VARIABLE & DATA TYPE QUESTIONS
// ------------------------------------------

//  Create a tuple describing Giri's user profile and log each element

let giriProfileHL: [string,number,boolean]=["giri,25,ture"];
console.log("Q1:","Q2:","Q3:",giriProfileHL);

// Use a union type variable to store multiple possible types for Giri

let giriStatusHL: string | number | boolean = "Active";
console.log("Q2:", giriStatusHL);

// Create a readonly object for Giri’s account settings

let giriSettings: Readonly<{ theme: string; notifications: boolean }> = {
    theme: "dark",
    notifications: true
};
console.log(giriSettings);

// Create an enum for Giri’s roles in a system

enum Roles { Admin = "ADMIN", User = "USER", Tester = "TESTER" }
let giriRoleHL: Roles = Roles.User;
console.log(giriRoleHL);

// Create a nested object type describing Giri’s address

let giriAddress: {
    city: string;
    pin: number;
    geo: { lat: number; long: number };
} = {
    city: "Chennai",
    pin: 600001,
    geo: { lat: 78.01, long: 45.11 }
};
console.log(giriAddress);

// Create a generic type for Giri’s response structure

type GiriApiResponse<T> = { data: T; success: boolean };
let giriApi: GiriApiResponse<string> = { data: "User created", success: false };
console.log(giriApi);

// Use a mapped type to allow optional fields for Giri

type Optional<T> = { [P in keyof T]?: T[P] };
let partialGiri: Optional<{ id: number; email: string }> = { id: 101 };
console.log(partialGiri);

// Use the never type with exhaustive checking

let giriCheck = (x: string | number): never | void => {
    if (typeof x === "string") console.log(x);
    else if (typeof x === "number") console.log(x);
    else {
        let n: never = x;
        console.log(n);
    }
};
giriCheck("nouz");
giriCheck("trainer");

// Store function overload signatures in a variable

type Over = {
    (x: number): number;
    (x: string): string;
};
let giriOver: Over = (x: any) => x;
console.log(giriOver("Giri"));

// Deep nested object with multiple levels

let deepData: {
    user: {
        name: string;
        records: {
            lastLogin: string;
            devices: string[];
        };
    };
} = {
    user: {
        name: "Giri",
        records: { lastLogin: "2025-11-12", devices: ["Mobile", "Laptop"] }
    }
};
console.log(deepData);

// Create a function type variable with generic constraint

let giriGenericFn: <T extends string | number>(value: T) => T = (v) => v;
console.log(giriGenericFn("Giri"));

// Create a tuple with rest elements

let giriRestTuple: [string, ...number[]] = ["Giri", 10, 20, 30];
console.log(giriRestTuple);

// Create a Record type for storing Giri’s scores

let giriScores: Record<string, number> =
 {
    test1: 88,
    test2: 93,
    test3: 78
};
console.log(giriScores);

//  Use keyof with variable to dynamically pick a type

type UserObj = { name: "manoj"; age: 25; active: true };
let giriKey: keyof UserObj = "age";
console.log(giriKey);

// Create a variable with a recursive type

type NestedList = (number | NestedList)[];
let giriNestedNumbers: NestedList = [1, [2, [3, 4,5]]];
console.log(giriNestedNumbers);

// Create interface and assign data to a variable

interface GiriInfo {
    id: number;
    name: string;
    dept: string;
}
let giriObj: GiriInfo = { id: 11, name: "Giri", dept: "Automation" };
console.log(giriObj);

//  Class-based typed variable

class GiriClass {
    user: string;
    level: number;
    constructor(u: string, l: number) { this.user = u; this.level = l; }
}
let giriInstance: GiriClass = new GiriClass("Giri", 5);

console.log(giriInstance);

// Use conditional types inside a variable type

type IsNumber<T> = T extends number ? "num" : "fortuner";
let giriCond: IsNumber<number> = "fortuner";
console.log(giriCond);

// Variable storing a function returning another function

let giriHigherOrder: (x: string) => () => string =
    (x) => () => `Hi ${x}`;

console.log(giriHigherOrder("Giri")());

// Variable using readonly array type

let giriReadOnlyArr: readonly string[] = ["Giri", "Automation", "TS"];
console.log(giriReadOnlyArr);