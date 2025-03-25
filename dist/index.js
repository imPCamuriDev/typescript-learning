"use strict";
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    greet() {
        return `Olá, meu nome é ${this.name}, tenho ${this.age} anos e estudo ${this.course}.`;
    }
}
const student = new Student("João", 20, "Engenharia");
console.log(student.greet());
