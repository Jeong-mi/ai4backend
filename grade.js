//학생 엘리스의 성적

//ES5 : commonJS와 비슷하다
const kor = 90
const eng = 60
const mat = 70

// //1) module.exports에 export하고 싶은 하나의 모듈을 참조시키기
module.exports = {
  kor: kor,
  eng: eng,
  mat: mat
}

// //2) exports의 속성으로는 여러 개의 모듈을 참조시키기
exports.kor = kor
exports.eng = eng
exports.mat = mat

//ES6 
//1) export default로 export하고 싶은 하나의 모듈을 지정하기
//1) import 시에는 import..from을 사용해서 export된 하나의 객체를 가져와 사용함
const obj = {
  kor: 90, 
  eng: 80,
  mat: 70
}
export default obj

//2)export로 여러개의 모듈을 각자 참조 가능함
const kor = 90
const eng = 80
const mat = 70
export {kor, eng, mat}