type Product = { id: number; name: string; price: number };
type ProductSummary = { label: string; total: number };

const products: Product[] =
 [
    
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
];

const summaries: ProductSummary[] = products.map(function (p)
 {
  return { label: p.name, total: p.price * 1.18 };
});

console.log("Summaries:", summaries);