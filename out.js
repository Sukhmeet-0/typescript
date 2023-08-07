// // // var data:string|number="anil";
// // // console.log(data);
// // // interface userType{
// // //     name:string,
// // //     age:number
// // //     getName:()=>string
// // // }
// // // var users:userType={
// // //     name:'anil',
// // //     age:30,
// // //     getName:function(){
// // //         return "anil sidhu";
// // //     }
// // // }
// // // console.warn(users);
// // // console.warn(users.getName());
// // // // function Calss():number{
// // // //     return 10+10;
// // // // }
// // // // console.warn(Calss())
// // // function Calss(a:number,b?:number):number{
// // //     return b?a+b:a;
// // // }
// // // console.warn(Calss(80))
// // class App{
// //     constructor(){
// //         console.log("Constructor called");
// //     }
// //     name='anil'
// //     getName(){
// //         console.log(this.name);
// //     }
// // }
// // let a1=new App();
// // a1.getName();
// class A{
//     name='a';
//     getname(){
//         console.log(this.name)
//     }
// }
// class B extends A{
//     age=21;
//     getage(){
//         console.log(this.age)
//     }
// }
// var c=new B();
// c.getname();
// c.getage();
var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "sukhmeet singh";
        };
        return Users;
    }());
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
console.log(u1.getName());
