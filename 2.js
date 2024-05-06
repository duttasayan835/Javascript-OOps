class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.course = [];
  }
  enroll(course) {
    this.course.push(course);
    console.log(`${this.name} has enrolled in ${course}.`);
  }
  showcourses() {
    console.log(`${this.name}'s enrolled courses :  ${this.course.join(", ")}`);
  }
}
class Admission {
  constructor() {
    this.student = [];
  }
  enrollStudent(student) {
    this.student.push(student);
    console.log(`${student.name} has been enrolled`);
  }
  assignCourse(student, course) {
    if (student instanceof Student && student.email && course) {
      student.enroll(course);
    } else {
      console.log(`Invalid student or course information`);
    }
  }
  showenrolledStudents() {
    console.log("Enrolled Students");
    this.student.forEach((student) => {
      console.log(`-${student.name} (${student.email})`);
    });
  }
}

const admissionOffice = new Admission();

const student1 = new Student("Mithun", "mithun@pw.live");
const student2 = new Student("Farman", "farman@pw.live");

admissionOffice.enrollStudent(student1); // Mithun has been enrolled.
admissionOffice.enrollStudent(student2); // Farman has been enrolled.

admissionOffice.assignCourse(student1, "Full Stack Web Development"); // Mithun has enrolled in Full Stack Web Development.
admissionOffice.assignCourse(student2, "Data Science Masters"); // Farman has enrolled in Data Science Masters.

student1.showcourses(); // Mithun's enrolled courses: Full Stack Web Development
student2.showcourses(); // Farman's enrolled courses: Data Science Masters

admissionOffice.showenrolledStudents();
