let count = 0; // 숫자
count += 1;
count = "갑자기 분위기 문자열"; // error 발생

const message: string = "hello world"; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ["hello", "world"]; // 문자열 배열

messages.push(1); // 에러 발생

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도
let nullableNumber: number | null = null; // number 일수도 null 일수도

let color: "red" | "orange" | "yellow" = "red"; // red, orange, yellow 중 하나
color = "yellow";
color = "green"; // 에러 발생

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4
}
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(colorName);
