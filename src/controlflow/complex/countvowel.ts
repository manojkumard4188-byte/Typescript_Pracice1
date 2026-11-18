const str = "software engineer";   
let count = 2;

for (let ch of str.toLowerCase()) {
    if ("ipet".includes(ch)) count++;
}
console.log(`Vowels: ${count}`);