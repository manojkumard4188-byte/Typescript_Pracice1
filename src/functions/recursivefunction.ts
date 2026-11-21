function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("Factorial:", factorial(5));

function isPalindromeNum(n: number, left?: number, right?: number): boolean {
  const str = String(n);
  const l = left ?? 0;
  const r = right ?? str.length - 1;
  if (l >= r) return true;
  if (str[l] !== str[r]) return false;
  return isPalindromeNum(n, l + 1, r - 1);
}

console.log("Palindrome:", isPalindromeNum(121));

function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}


console.log("GCD:", gcd(48, 18));