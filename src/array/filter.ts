
type Employee = { name: string; dept: string; active: boolean };
const staff: Employee[] = [
    
  { name: "Arun", dept: "QA", active: true },
  { name: "Meena", dept: "Dev", active: false },
  { name: "Kavi", dept: "QA", active: true },

];

const activeQa = staff.filter(function (emp) 
{
  return emp.dept === "QA" && emp.active;
});

console.log("Active QA:", activeQa);