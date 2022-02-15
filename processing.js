//ES5
//1), 2) import 시에는 require를 사용해서 모듈을 가져온다
const grade = require('./grade.js')
console.log(grade)

//ES6
//(node:30804) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
//위와 같은 오류가 난다면, package.json에 "type": "module"을 적어야 한다!!
//package.json에 type을 지정하지 않으면 자동으로 CommonJS로 실행되므로 module이라고 명시해주는 것이다.
//1) import 시에는 import..from을 사용해서 export된 하나의 객체를 가져와 사용함
import grade from "./grade.js"
console.log(grade)

//2) 'import { import할 모듈 이름.. } from 경로'
//2) import * as grade from 경로
import * as grade from "./grade.js"
console.log(grade)

//참고 사이트: https://study-ihl.tistory.com/88