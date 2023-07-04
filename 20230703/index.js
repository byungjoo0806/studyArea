// babel

// 자바스크립트 코드의 변환을 도와주는 친구
// 자바스크립트를 컴파일 해주는 도구

// 자바스크립트 문법이 진화를 꾸준히 했고
// ES5 -> ES6 문법이 개발되고
// ES6 문법이 개발되었는데 ES5에서 개발한 것들을 모두 변환하기 힘들어서
// babel로 문법을 쉽게 고쳐서 쓰려고 변환 시켜준다.


// 모듈 시스템

// ----------------- commonjs = (require, module.exports) ------------------ //
// a.js
// const text = "hello";
// module.exports = text;

// b.js
// const {text} = require("a.js");
// console.log(text);
// ------------------------------------------------------------------------- //


// ------------------ ES6 ------------------ //
// a.js
const text = "hello";

// 1. export {text}; - 여러개를 내보낼 경우
// 2. export default text; - 하나만 내보낼 경우

// b.js
// 1. import {text} from "a.js"; - 여러개를 내보냈을 경우, 받는 방법
// 2. import [any_name] from "a.js"; - 하나만 내보낸걸 받을 경우, 변수 이름을 자유롭게 설정할 수 있다.
// console.log(text);

// babel 기본 사용법
// babel 속성
// presets
// plugins

// babel은 기본적으로 자바스크립트로 구성 되어있다.
// npm을 통해서 설치 가능



// babel01 폴더 
// 1. babel 기본 구성 설치
// npm init -y : package.json 기본 설정
// npm install @babel/core @babel/cli @babel/preset-env

// 2. babel 환경 구성
// .babelrc 파일 만들기
// rc = run commands, run control, 등등의 의미

/*
    json으로 설정
    {
        "presets" : ["@babel/preset-env"]
    }
*/

// 3. babel 실행
// npx babel [file_name] --out-file [target_directory/file_name]
// npx babel app.js --out-file dist/app.js



// babel02 폴더 - 모듈 시스템 변환 ES5
// 1. babel 기본 구성 설치
// npm init -y
// npm install @babel/core @babel/cli
// npm install @babel/plugin-transform-modules-commonjs

// 2. babel 환경 구성
// .babelrc 파일 만들기

/*
    json으로 설정
    {
        "plugins" : ["@babel/plugin-transform-modules-commonjs"]
    }
*/

// 3. babel 실행
// npx babel server.js --out-file dist/server.js



// babel03 폴더 - JSX 문법 컴파일

// 1. npm init -y
// 2. npm install @babel/core @babel/cli
// 3. npm install @babel/preset-react
// 4. npx babel app.js --out-file dist/app.js : 컴파일


// ----------------------------- webpack ----------------------------- //
// babel : 코드자체를 변환할때, 단일파일의 코드 자체를 변환할때 사용하는데
// webpack : 모듈 번들러 - 여러 파일을 하나의 파일로 구성해주는 것

// js 1
// js 2
// js 3
// js 4

// 모듈
// 모듈은 프로그램을 구성할때 구성 요소로, 관련된 데이터나 함수를 하나로 묶은 단위

// user
// user.controller
// user.service
// user.view

// 번들러
// 번들러는 의존성을 가지고 동작하는 모듈 코드를 하나의 파일로 만들어 주는 것

// webpack 속성
// entry : 진입점을 지정; 시작점으로 사용할 모듈은 webpack에 알려줌
// output : 내보내는 번들링 방법을 결정; 생성한 번들링 파일의 위치, 이름
// loaders : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css 이미지 파일을 처리
// plugins : 추가 기능 사용시 번들 최적화; html 파일 생성이나 환경변수 삽입 등등

// webpack 기본 사용
// 패키지 설치
// 1. npm init -y
// 2. npm install webpack webpack-cli

// 프로젝트 생성
// src 폴더 만들고 번들링 진행

// webpack의 설정 파일
// webpack.config.js

// webpack 실행
// 3. npx webpack



// loaders 속성을 사용해서
// 다양한 유형의 파일을 모듈화할 수 있다.
// css, image 등등을 번들링 해보자

// loaders 1. 패키지 설치
// npm init -y
// npm install webpack webpack-cli css-loader style-loader

// loaders 2. 프로젝트 구성
// src 폴더에 index.css index.js 두 파일 생성

// loaders 3. webpack 설정 파일
// webpack.config.js

// loaders 4. webpack 실행
// npx webpack




// webpack03 폴더
// webpack plugin
// html을 만들자

// 패키지 설정
// npm init -y
// npm install webpack webpack-cli html-webpack-plugin

// babel 설정
// .babelrc 파일 생성
/* 
    json 객체
    {
        "presets" : ["@babel/preset-env","@babel/preset-react"]
    }
*/

// react, react-dom 설치
// npm i react react-dom

// npm i @babel/preset-env @babel/preset-react
// npm i @babel/core babel-loader


// 리엑트 프로젝트의 시작
// npx create-react-app