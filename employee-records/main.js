// You are to create a collection of employee's information for your company. Each employee has the following attributes:
// 1. Name
// 2. Job title
// 3. Salary
// 4. Status
// First, you will create an empty array named `employees`
// Next, you will create an `Employee` constructor with the first three attributes defined at the time of instantiation and the fourth will be defaulted to `"Full Time"`.
// This constructor will also have a method called `printEmployeeForm` that prints the employee's information to the console.
// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)
// You will then:
// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.
// Here's a refresher for the constructor syntax. Attempt writing yours without using the following code:

var employees = []
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    employees.push(this)
}

Employee.prototype.printEmployeeForm = function () {
    console.log(this)
}

var zachary = new Employee("Zachary Smith", "Fullstack Developer", 75000)
var alabama = new Employee("Alabama Hill", "Medical Coding", 45000)
var jaiden = new Employee("Jaiden Riley", "Project Coordinator", 60000)

alabama.status = "Contract"
jaiden.status = "Part Time"

function getEmployeeRecords() {
    for (var i = 0; i < employees.length; i++) {
    employees[i].printEmployeeForm()
    }
}
getEmployeeRecords()
