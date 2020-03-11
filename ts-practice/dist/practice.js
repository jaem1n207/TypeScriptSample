"use strict";
var count = 0; // 숫자
count += 1;
count = "갑자기 분위기 문자열"; // error 발생
var message = "hello world"; // 문자열
var done = true; // 불리언 값
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ["hello", "world"]; // 문자열 배열
messages.push(1); // 에러 발생
var mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도
var nullableNumber = null; // number 일수도 null 일수도
var color = "red"; // red, orange, yellow 중 하나
color = "yellow";
color = "green"; // 에러 발생
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
alert(colorName);
