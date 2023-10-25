// Math 객체
// Math.random()
// 0 이상 1 미만의 랜덤한 숫자를 반환

console.log(Math.random());

function getRandom() {
  return Math.floor(Math.random() * 20);
}

console.log(getRandom());

//  배열
// 7세 이하 어린이 찾기
const users = [
  { name: "고길동", age: 44 },
  { name: "마이콜", age: 24 },
  { name: "둘리", age: 6 },
];

// const children = users.filter((user) => {
//   return user.age <= 7;
// });
const children = users.filter((user) => user.age <= 7);
console.log(children);

// 고길동 찾기
// const m = user.fine((user) => {
//   return user.name === "마이콜";
// });
const m = users.find((user) => user.name === "마이콜");
console.log(m);
