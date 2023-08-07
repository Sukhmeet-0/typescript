// // import TeacherLogin from './Teachers'
// import StudentLogin from './Student'


// // let teacher =new TeacherLogin();
// // console.log(teacher.data);
// let student =new StudentLogin();
// console.log(student.data);

function users<T>(data:T):T{
    return data
}

console.warn(users({name:"anil",age:30}).age);