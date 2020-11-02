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

enum StudentStatus {
    PRESENT = 1,
    ABSENT = -1
}

interface IStudent {
    id: number;
    name: string;
    school: string;
    status?: StudentStatus;
}

class StudentService {
    students: IStudent[];
    constructor(students: IStudent[]) {
        this.students = students;
    }
    showStudents() {
        return this.students;
    }
    
}

const students: IStudent[] = [
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
]

const studentService = new StudentService(students);

// console.log(studentService.showStudents());