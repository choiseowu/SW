// const promise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     console.log('3초뒤')
//   }, 3000);
// })

// promise.then(result => result).catch(error => console(error))

// const promise = async () => {
//   try{
//     const getData = await fetch('주소')
//     const result = await getData.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

//-------------------------------------------------------------------------------

// import / export 

// multiply 매개변수 number를 받아서 * 2한 값을 반환 
// 곱하기 함수를 파일로 만들어서 export 시키고 
// ./app.js로 실행하고 결과를 보세요 

// import add from './add.js'
// import multiply from './multiply.js'


// multiply 매개변수 number를 받아서 * 2한 값을 반환 
// 곱하기 함수를 파일로 만들어서 export 시키고 
// ./app.js로 실행하고 결과를 보세요 

// import {add as plus} from './util.js'
// add를 plus 이라는 이름으로 바꿔서 사용하고 싶을 때 as 사용 

// console.log(plus(2))
// console.log(multiply(3))

// import * as clac from './util.js'

// console.log(calc.add(2))
// console.log(calc.multiply(3))


// util.js 에 함수 - double export 매개변수 - number 
// double이 하는 일은 매개변수 number * number 
// app.js  가져다가 결과를 console.log()

import double from './util.js'
console.log(double(2))