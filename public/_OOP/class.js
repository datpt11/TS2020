"use strict";
// class Student {
//     id: number;
//     name: string;
//     school: string; 
//     constructor(id: number, name: string, school: string) {
//         this.id = id;
//         this.name = name;
//         this.school = school;
//     }
// }
// const student = new Student(1, "Dat", "FPT");
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["PRESENT"] = 1] = "PRESENT";
    StudentStatus[StudentStatus["ABSENT"] = -1] = "ABSENT";
})(StudentStatus || (StudentStatus = {}));
class StudentService {
    constructor(students) {
        this.students = students;
    }
    showStudents() {
        return this.students;
    }
}
const students = [
    {
        id: 0,
        name: "Dat",
        school: "Fpt",
    },
    {
        id: 1,
        name: "Dat2",
        school: "Fpt2",
        status: StudentStatus.PRESENT
    }
];
const studentService = new StudentService(students);
// console.log(studentService.showStudents());
