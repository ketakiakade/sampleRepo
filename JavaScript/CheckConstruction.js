var employee = function Emp(name) {
    this.name1 = name;
}
employee.prototype.a =100;
employee.prototype.b =100;
var jack = new employee("Jack Dwain");

console.log(employee.constructor); //gives Function()

console.log(employee.prototype); // gives  Emp {}

console.log(employee.prototype.constructor); //gives Emp(name)

console.log(jack.constructor); //gives Emp(name)

console.log(jack.prototype); //gives undefined
