//string (문자열)

const string1 = "hello"; //큰 따옴표
const string2 = "aha"; //작은 따옴표
const string3 = `yami ${string1} ${1 + 1}`; //백틱은 뒤에 구문 사용/ + 가능

console.log(string1, string2, string3);

//number (숫자)
// 숫자는 따옴표x, 문자만 사용

const number = 123;
const negative = -123;
const float = 3.14;

console.log(number + 1);
console.log(negative + number);
console.log(float + number);

const number2 = -123.123;

console.log(number2 + undefined);
console.log(typeof (number2 + undefined));

// 숫자로 변환
const a = 0.1;
const b = 0.2;

console.log(a + b);
console.log((a + b).toFixed(1));
console.log(typeof (a + b).toFixed(1));
console.log(Number((a + b).toFixed(1)));

// boolean(참과 거짓)
const truthy = true;
const falsy = false;

if (falsy) {
  console.log("truthy");
}

// null

let age = null;
console.log(age);

// 재할당의 경우 let 사용하지 않음
age = 20;
console.log(age);

// undefined
let name;
console.log(name);

name = "chej";
console.log(name);

let hight;
console.log(hight);

hight = "cheji";
console.log(hight);

// ex
const user1 = {
  name: "cheej",
  age: 20,
  height: 170,
  email: null,
};

console.log(user1.name, user1.age, user1.height);
console.log(user1.email);
console.log(user1.weight);

// array 배열
const animals = ["dog", "cat", "fish"];

console.log(animals);
console.log(animals[0]);
console.log(animals[2]);
console.log(animals.length);
console.log(animals[animals.length - 1]);

// object(객체)
const user2 = {
  name: "chej",
  age: 20,
};

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);
console.log(user2["age"]);

const userA = {
  name: "kim",
  age: 50,
};

const userB = {
  name: "lee",
  age: 20,
  parent: userA,
};

console.log(userB);
console.log(userB.parent);
console.log(userB.parent.name);
console.log(userB["parent"]);
console.log(userB["parent"]["name"]);

// 배열에 객체 넣기
const users = [userA, userB];

console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);

// function (함수)
// 함수 선언식 (기명 함수)

function printHello() {
  console.log("hello");
}

printHello();
console.log(printHello);
console.log(printHello());

// 함수 표현식 (익명 함수)
const getNumber = function () {
  return 123;
};

console.log(getNumber);
console.log(typeof getNumber);
console.log(getNumber());
console.log(typeof getNumber());

// TYPE COVERSTION (타입 변환)

const aa = 1;
const bb = "1";

console.log(aa == bb);
console.log(aa === bb);

const cc = false;
const dd = 0;

console.log(cc == dd);
console.log(cc === dd);

const ee = true;
const ff = 1;

console.log(ee == ff);
console.log(ee === ff);

// truthy (참 같은 값) & fals (거짓 같은 값)

if (false) {
  console.log("true");
}

// 데이터 타입 확인(typeof)

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});
