// 私の年齢
const myAge = 26;
// 早い年
let earlyYears = 2;
earlyYears *= 10.5;
// 最後の年
let laterYears = myAge - 2;

laterYears *= 4;

// 人間の年齢を犬年齢に換算
let myAgeInDogYears = earlyYears + laterYears;
// 名前を小文字で定義
let myName =  'Moe'.toLowerCase();

// 実年齢と犬年齢換算した場合の年齢を自己紹介
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
console.log(laterYears);
console.log(earlyYears);
