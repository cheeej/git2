function getGrade(score) {
  if (score === 100) {
    // A+
    return "A+";
  } else if (score >= 90) {
    // A
    return "A";
  } else if (score >= 80) {
    // B
    return "B";
  } else if (score >= 70) {
    // C
    return "C";
  } else if (score >= 60) {
    // D
    return "D";
  } else {
    // F
    return "F";
  }
}
console.log(getGrade(100));
console.log(getGrade(70));

// 객체 구조 분해 할당
const user1 = {
  name: "가을",
  age: 2,
};

function print({ name, age }) {
  // return u.name
  // const { name, age } = u;
  return `${name}은 ${age}살 입니다.`;
}
console.log(print(user1));

// 배열 구조 분해 할당

const animals1 = ["개", "고양이", "참새"];

function print2([, b]) {
  // const [a, b, c] = arr;
  // const [, b] = arr;
  // return arr[1];
  return b;
}
console.log(print2(animals1));

// 나머지 매개변수
function sum9(a, b, ...rest) {
  console.log(a, b, rest);
}

console.log(sum9(1, 2));
console.log(sum9(1, 2, 3, 4, 5, 6, 7));

// 화살표 함수
// 기본문법 () => {} 이것 자체가 익명함수로서,
// const name = () => {};
// (x) => {}; //매개변수가 하나일 때, 소괄호 생략 가능
// (x, y) => {}; //매개변수가 여러개일 때는 소괄호 생략 불가능
// (x) => {
//   return x + x;
// };
// (x) => x + x; //  축약형 (중괄호 생략시 return 문 생략 가능)
// (x) => {
//   console.log(x);
//   return x * x;
// }; // return 키워드로 시작하지 않는 경우, 중괄호 생략 불가능

// 예시

const gg = () => {
  return { a: 1 };
};
// ↓
const ggg = () => ({ a: 1 });

const hh = () => {
  return [1, 2];
};
// ↓
const hhh = () => [1, 2];

// 콜백 함수
// 함수의 매개변수로 전달되는 함수

const aa = (callback) => {
  callback();
  console.log("a");
};

const bb = () => {
  console.log("b");
};

aa(bb);
