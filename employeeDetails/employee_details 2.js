//Use this js file instead The first download does not work. it was according to the original lesson, however they are missing the function clauses.
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
  ];

// Function to display all employees
//add the function display Employee it is missing in the original lesson if 
//you do not add the function the button for display employees will not work
function displayEmployees() {
const totalEmployees = employees.map((employees, index) => `<p>${employees.id}: ${employees.name}: ${employees.name} - ${employees.department} - $${employees.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
//change employee to employees throughout this code or it will not produce a result
  function displayHREmployees() {
    const hrEmployees = employees.filter(employees => employees.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employees, index) => `<p>${employees.id}: ${employees.name}: ${employees.name} - ${employees.department} - $${employees.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//The original lesson needs to have an added brace at the end of code 
//I added the brace if you do not add the brace your code may not display results
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}
