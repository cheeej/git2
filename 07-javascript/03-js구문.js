const arr = [1, 2, 3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 구조 분해 할당
const [a, b, c] = arr;

console.log(a, b, c);

//  변수가 미리 할당되어 있을 경우

let // d = 4,
  e = 5,
  f = 6;

const arr2 = [1, 2, 3];

// const d = arr2[0];
// const e = arr2[1];
// const f = arr2[2];
// 구조 분해 할당
[, e, f] = arr2;
console.log(e, f);

// 나머지 할당
const arr3 = [6, 7, 8];
const [g, ...rest] = arr3;
console.log(g, rest);

// const g = arr[0];
// const rest = arr[(1, 2)];
