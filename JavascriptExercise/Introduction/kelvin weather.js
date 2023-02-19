// 温度293Kに設定
const kelvin = 0;
// 摂氏を定義
const celsius = kelvin - 273;
// 摂氏を華氏に変換
let fahrenheit = celsius*(9/5) + 32;
// 切り捨てして整数で表示
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// newtonに変換
let newton = celsius*(33/100);
// 切り捨て整数
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);