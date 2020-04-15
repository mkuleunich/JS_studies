/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName () {
        return this.firstName + " " + this.lastName;
    }

}

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 * 4) static method compareGrades that pass two instances of Student and compare their grades,
 *    1 if first greater
 *    0 if equal
 *    -1 if second greater
 */
class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName,lastName);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }

}

const person = new Person ('Donald', 'Trump');
const student = new Student ('Donald', 'Trump', 8);

module.exports = {
    person,
    student
};
