function logGrade(marks: number): void {
  switch (true) {
    case marks >= 90: console.log("M2 Grade: A"); break;
    case marks >= 75: console.log("M2 Grade: B"); break;
    case marks >= 50: console.log("M2 Grade: C"); break;
    default: console.log("M2 Grade: F");
  }
}

console.log(logGrade(82));