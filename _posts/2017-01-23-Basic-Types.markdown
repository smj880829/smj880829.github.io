---
layout: post
title:  "Basic Types"
date:   2017-01-23 15:33:09 +0900
categories: [typescript,handbook]
---
#Introduction
For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along.  

개발자들에게 유용하게, 우리는 타입스크립트에서 단순한 데이터 형식 숫자...등을 작업 할수있도록, 우리는 지원하단다 자바스크립트의 대부분의 타입들을 또한 편리한 열거형 타입들을  

#Boolean
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.  
```
let isDone: boolean = false;  
```     
 가장 기초적인 데이타타입은 참/거짓 값 또한 자바스크립트와 타입스크립트에서는 boolean 값이라 불린다  

#Number
As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.  
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;  
```   
자바스크립트에서 처럼 타입스크립트의 모든 숫자들은 부동소수점 값이다. 이러한 부동소수점 숫자들은 변수형 타입을 가진다. 추가로 16진수 10진수 글자들. 타입스크립트 또한 지원한다 2진수와 8진수 값들 ecmascript 2015에 나온것들.  

#String
Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.  
```
let color: string = "blue";
color = 'red';  
```  
자바스크립트에서 웹서버 프로그램을 만들때 다른 기본적인 부분에서 텍스트 데이터는 똑같이 동작한다. 다른 언어에서 우리는 이러한 문자열 데이터타입을 string 타입이라고 부른다.  
자바스크립트,타입스크립트 또한 string 데이터 주위로 "" 또는 '' 를 사용한다.  
