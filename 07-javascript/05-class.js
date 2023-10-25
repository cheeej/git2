// // const animals = ["게", "고양이", "참새"]; //배열 리터럴

// // 생성자 함수로 배열 make 가능
// // const animals = new Array("개", "고양이", "참새");

// // console.log(animals);
// // console.log(animals.length);
// // console.log(animals[1]);
// // console.log(animals.includes("개"));
// // console.log(animals.includes("인간"));
// // 위와 같이 length, includes 등을 프로토타입 속성이라고 한다.

// // prototype을 이용한 메소드 생성
// const animals = new Array("dog", "cat", "fish");

// // 배열의 프로토타입에 cheej 메소드 추가
// Array.prototype.cheej = function () {
//   console.log(this);
// };

// animals.cheej();
// const arr = [1, 2, 3];
// arr.cheej();

// const winter = {
//   firstName: "winter",
//   lastName: "son",
//   // getFullName: function () {}, //메소드
//   getFullName() {
//     // 일반 함수에서 this는 호출한 객체를 가리킴
//     return `${this.firstName} ${this.lastName}`;
//   }, //: function  생략 가능
// };

// const fall = {
//   firstName: "fall",
//   lastName: "kim",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(winter);
// console.log(fall);
// console.log(winter.getFullName());
// // console.log(fall.getFullName());
// console.log(winter.getFullName.call(fall));

// (user라는)생성자 함수를 통해 객체를 만들어보자.
// function User(first, last) {
//   this.firstName = first;
//   this.lastName = last;
// }

// User.prototype.UsergetFullName = function () {
//   return `${this.firstName}, ${this.lastName}`;
// };

// class 함수를 이용한 생성자 함수
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName}, ${this.lastName}`;
  }
}

// new를 통해 객체 생성
const winter = new User("winter", "son");
const fall = new User("fall", "kim");

console.log(winter);
console.log(fall);
console.log(winter.getFullName());
console.log(fall.getFullName());
