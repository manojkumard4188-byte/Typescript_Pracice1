object with full type

let students :{
    name:"giri"
    age:24
    ispass:true
};
console.log(students);

array of object

let team:{user:string;role:string}[]=[
    {user:"giri",role:"dev"},
    {user:"manoj",role:"testing"}

];
console.log(team);

function type variables

let greetfunc:(x:string)=> void;
greetfunc=(x:string)=>console.log("Hi",x);
greetfunc("giri");

enum with string values
enum role {admin="ADMIN",user="USER"}
let manojrole:role=role.admin;
console.log(manojrole);

Using let inside block scope

var scope =50;
if (true){
    var scorpe =80;
}
console.log(scorpe);

set usages

let giriSet = new Set <string>();
giriSet.add("giri");
giriSet.add("manoj");
console.log(giriSet);