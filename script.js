//complete this code
class Person {
  constructor(name, age) {
    this._name = name; // Use a private field for name
    this._age = age;   // Use a private field for age
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  // Getter for age (optional, for demonstration purposes)
  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
