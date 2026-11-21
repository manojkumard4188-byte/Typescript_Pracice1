function isPassing(score: number): boolean {
  if (score >= 50) return true;
  return false;
}
console.log("Pass:", isPassing(25), isPassing(30));