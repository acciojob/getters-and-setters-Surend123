//complete this code
class Person {
	let name;
	let age;
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	function getName(){
		return this.name;
	}
	function setName(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	function study(){
		// console.log(super.name," is studing");
		return this.name+" is studing";
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	function teach(){
		// console.log(super.name," is teaching");
		return this.name+" is teaching";
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
