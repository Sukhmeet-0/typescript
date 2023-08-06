"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("test function working fine");
    };
    return App;
}());
var x = new App();
x.test();
var a = 50;
var b = 10;
console.log(a);
console.log(b);
var data = ['anil', "joyboy", "mario", 100, false];
data.push("peter");
// data.push(100);
data.push(10);
// data.push(true);
data.push(true);
data[0] = false;
console.log(data);
var data2 = ['anil', 'sam'];
data2.push("jaf");
console.log(data2);
'';
// let users:usersTyped={
//     name:'bruce',
//     age:50,
//     address:"india"
// }
var users = {
    name: 'bruce',
    age: 50,
    address: "india"
};
users.age = null;
users.address = 9;
users.name = "sukhmeet";
console.log(users);
