interface product{
    id:number;
    name:"srting";
    price:number;
    category:string;
    instock:boolean;
}

const products: product [] = [
    { id: 1, name: "bluetooth", price: 1200, category: "Electronics", inStock: true },
    { id: 2, name: "Mouse", price: 250, category: "Electronics", inStock: true },
    { id: 4, name: "table", price: 1500, category: "Furniture", inStock: true }

];

console.log("\n=== FOR LOOP ===");
for (let i = 0; i < products.length; i++) {
    console.log(`${i}: ${products[i].name} - $${products[i].price}`);
}

console.log("\n=== WHILE LOOP ===");
let index = 0;
while (index < 3) {
    console.log(products[index].name);
    index++;
}

console.log("\n=== DO-WHILE LOOP ===");
let count = 0;
do {
    console.log(`Attempt ${count + 1}`);
    count++;
} while (count < 3);

console.log ()

console.log("\n=== FOR-OF LOOP ===");
for (const product of products) {
    if (product.inStock) {
        console.log(`${product.name} is available`);
    }
}

console.log('\n===for in loop (objects) === n');
const user ={ name:"john",age:30,email:"john@Test.com"};
for (const key in user){
    console.log(`${key}:${user[key as keyof typeof user]}`);
}


console.log("\n=== FOREACH ===");
products.forEach((product, index) => {
    console.log(`[${index}] ${product.name}: $${product.price}`);
});

console.log("\n=== MAP - Transform ===");
const productNames = products.map(p => p.name);
console.log(productNames);

const discountedPrices = products.map(p => ({
    name: p.name,
    originalPrice: p.price,
    discountedPrice: p.price * 0.9
}));
console.log(discountedPrices);

// console.log("\n=== FILTER - Select ===");
// const inStockProducts = products.filter(p => p.inStock);
// console.log("In Stock:", inStockProducts.map(p => p.name));

// const expensiveItems = products.filter(p => p.price > 200);
// console.log("Expensive (>$200):", expensiveItems.map(p => p.name));

console.log("\n=== REDUCE - Aggregate ===");
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total price:", totalPrice);


const categoryCount = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log("Count by category:", categoryCount);

const groupedByCategory = products.reduce((acc, p) => {
    if (!acc[p.category]) {
        acc[p.category] = [];
    }
    acc[p.category].push(p);
    return acc;
}, {} as Record<string, Product[]>);
console.log("Grouped by category:", Object.keys(groupedByCategory));

console.log("\n=== REVERSE ===");
const reversed = [...products].reverse();
console.log("Last product:", reversed[0].name);


console.log("\n=== CHAINING ===");
const result = products
    .filter(p => p.inStock)                              // Only in stock
    .map(p => ({ ...p, price: p.price * 0.9 }))         // Apply 10% discount
    .filter(p => p.price < 1500)                          // Under $500
    .sort((a, b) => a.price - b.price)                   // Sort by price
    .map(p => `${p.name}: $${p.price.toFixed(2)}`);      // Format

console.log("Filtered & Sorted:", result);

console.log("\n=== BREAK & CONTINUE ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;  // Skip 5
    if (i === 8) break;     // Exit at 8
    console.log(i);
}