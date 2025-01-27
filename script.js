//complete this code
class Person {
	let name;
	let age;
	Person(name,age){
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
	function study(){
		console.log(super.name," is studing");
	}
}

class Teacher extends Person {
	function teach(){
		console.log(super.name," is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
