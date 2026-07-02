// refactored messy.js

const company = "Tech Solutions";

const employees = [
    { id: 1, name: "John", age: 28, department: "Engineering", salary: 50000, active: true },
    { id: 2, name: "Sara", age: 32, department: "HR", salary: 45000, active: true },
    { id: 3, name: "Mike", age: 26, department: "Engineering", salary: 52000, active: false }
];

// Object deconstructing
const printEmployee = ({ name, age, department, salary }) => {
    console.log("----------------");
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`Department : ${department}`);
    console.log(`Salary : ${salary}`);
};

for (const employee of employees) {
    printEmployee(employee);
}

// replacing var with const/let
const addEmployee = (id, name, age, department, salary, active) => {

    const employee = {
        id,
        name,
        age,
        department,
        salary,
        active
    };

    employees.push(employee);
};

addEmployee(4, "David", 29, "Finance", 47000, true);

console.log("----------------------------");

for (const { name, department } of employees) {
    console.log(`${name} works in ${department}`);
}


const calculateTotalSalary = (list) => {

    let total = 0;

    for (const employee of list) {
        total += employee.salary;
    }

    return total;
};

console.log(`Total Salary : ${calculateTotalSalary(employees)}`);


const getEngineeringEmployees = (list) => {

    const result = [];

    for (const employee of list) {
        if (employee.department === "Engineering") {
            result.push(employee);
        }
    }

    return result;
};

console.log(getEngineeringEmployees(employees));

const getActiveEmployees = (list) => {

    const result = [];

    for (const employee of list) {
        if (employee.active) {
            result.push(employee);
        }
    }

    return result;
};

console.log(getActiveEmployees(employees));

const printNames = () => {

    for (const { name } of employees) {
        console.log(name);
    }
};

const printDepartments = () => {

    for (const { department } of employees) {
        console.log(department);
    }
};

printNames();
printDepartments();

const greet = (name = "Guest") => {
    console.log(`Welcome ${name}`);
};

greet();
greet("Kavya");

const getBonus = salary => salary * 0.10;

console.log(getBonus(60000));

const salaryAfterTax = salary => {

    const tax = 5000;

    return salary - tax;
};

console.log(salaryAfterTax(60000));

const isHighSalary = ({ salary }) => salary > 50000;

console.log(isHighSalary(employees[0]));

const displayEmployee = ({ name, age, department }) => {

    console.log(name);
    console.log(age);
    console.log(department);
};

displayEmployee(employees[1]);


const names = [];

for (const { name } of employees) {
    names.push(name);
}

console.log(names);

const delayMessage = message => {

    return new Promise(resolve => {

        setTimeout(() => { resolve(message);}, 1000);}); 
};

delayMessage("Task Completed")
    .then(result => { console.log(result);});