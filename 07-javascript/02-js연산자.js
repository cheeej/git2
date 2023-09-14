// 산술 연산자
// +, -, *, /, %, ++,--

console.log(1 + 2);
console.log(5 - 7);
console.log(5 * 7);
console.log(10 / 2);
console.log(7 % 5);
console.log(6 % 3);
console.log(8 % 2);

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(4));

// 할당 연산자

let a = 2;
console.log(a);
// const 재할당x, let 재할당 가능

// 재할당
a = 3;
console.log(a);

// 재할당 + 연산

// a =  a + 3;
// a += 3;
// a *= 3;
// a /= 3;
a %= 3;
console.log(a);

// 증가 연산자
let b = 1;

// b = b + 1;
console.log(b);
console.log(b++);
// console.log(b++);
console.log(++b);
console.log(++b);

// 감소 연산자
let c = 1;

// c = c - 1
console.log(c--); // 선출력 후연산
console.log(c); // 선연산 후출력
console.log(--c);
console.log(c);

// 부정 연산자
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);

console.log(!!0);
// 보통 ~하지 않다면의 부정적인 상황에 사용

console.log(![]);
console.log(!{});
console.log(!null);
console.log(!function () {});
