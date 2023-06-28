//  상수 , 변수 
// 기존의 자바스크립트를 ES5 
// ES6, ES7, ES2019 ... ES6 => ESNEXT 

// ----------------------------------------------------------------------

//ES5, var = Variable
// var name = '철수'
// console.log(name)

//-----------------------------------------------------------------------------------

//ES6, let / const 
// let은 변화하는 내용을 넣을 때 쓰는 변수선언법
// const = constant 상수, 변화하지 않는 내용을 담을 때 씀
let name = '철수'
name = '영희'
console.log(name)
// 철수에서 영희로 변화가능 

const myName = '서우'
// myName = '피카츄'
console.log(myName)
// 서우에서 피카츄로 변화 불가능 

//---------------------------------------------------------------------------------------------

// 함수 
// ES5
function multiply (number) {
  return number * 2;
}
console.log(multiply(2))

//----------------------------------------------------------------------------------------

// ES6 화살표 함수
const multiply2 = (number) => {
  return number * 2
}
console.log(multiply2(3))

// 화살표함수에서, 매개변수가 하나일 때만 가능한 방법
const multiply3 = number => number * 2
console.log(multiply3(5))


//--------------------------------------------------------------------------------------



// Class - 객체지향프로그래밍 
// ES6부터 도입된 개념 

class Poketmon {
  constructor() {
    this.poketmonName = '피카츄'
  }
  showPoketmonName() {
    //포켓몬 이름을 출력해주는 메소드 
    console.log(this.poketmonName)
  }
}

class Trainer extends Poketmon{
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName ='지우') {
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName () {
    console.log(this.name)
  }
 
}
// 클래스 name 재할당
const trainer = new Trainer('웅이')
// trainer.name ='이슬'
trainer.showTrainerName() //지우
trainer.showPoketmonName() //피카츄
trainer.another()

// ---------------------------------------------------------------------



// 스프레드 연산자 
// 배열에서도 쓸 수 있고, 객체에서도 쓸 수 있다. 
// ... (점 3개를 꼭 지켜주기)

const poketmons = ['피카츄', '고라파덕', '이상해씨']
const newPoketmon = [...poketmons, '파이리']
// poketmons.forEach(poketmon => newPoketmon.push(poketmon))
//newPoketmon.push('파이리')
console.log(newPoketmon)

const numbers = [1,2,3]
//4,5를 추가해서 newNumbers 배열을 새로 생성하세요.
const newNumber = [...numbers, 4,5]
console.log(newNumber)


const poketmonTrainer = {
  name:'지우',
  poketmon:"피카츄"
}
console.log(poketmonTrainer.name)

const newTrainer = {
  ...poketmonTrainer,
  age: 20
}
console.log(newTrainer)

const char = {
  enLength: 26, 
}
// char의 내용을 복사해서  
// alphabet : characters 속성을 추가해서 
const num = {
  ...char,
  alphabet : "characters"
}
console.log(num)


//----------------------------------------------------------------------------------


// rest 연산자  args = arguments

// const numbers = [1,2,3]
const filterNumber = (...args) => {
  return args.filter(number => number == 1)
}
console.log(filterNumber(1,3,6,7,8))

//const filterNumber = (...args) => {
//   return args.filter(number => {
//  조건을 두가지 걸러낼 떄 
//  OR 
//     if(number === 1 || number === 3)
//     return number
//   })
// }

//filterAlphabet 
// 'a','b','c','d' 이 인수들을 필터링해서 
// alphabet ==='a'만 배열로 결과를 만들어주세요 

const filterAlphabet = (...args) => {
  return args.filter(alphabets => alphabets === 'a')
}
console.log(filterAlphabet('a','b','c','d','e'))
//['a'], filter메소드는 결과를 배열로 만들어준다.



// const poketmons = ['피카츄', '고라파덕', '이상해씨']
// 변수명 : '피카츄'만 출력 
// 결과 : ['피카츄']
const filterPoketmon = (...args) => {
  return args.filter(poketmon => poketmon === '피카츄')
}
console.log(filterPoketmon(...poketmons))

// let res = 1 + '2'
// console.log(res) 결과 '12'
// console.log(typeof res)

// --------------------------------------------------------------------------------------------


// 구조분해 - Destructuring / structure = 구조  / de - 분해 

const [a, b] = [1, 2]
console.log(a) // 결과 1 
console.log(b) // 결과 2

// const poketmons = ['피카츄', '고라파덕', '이상해씨']
// c,d,e 변수 3개에 구조분해해서 담아주세요 
//console.log() 결과 출력
const [c, d, e] = poketmons
console.log(c,d,e)
//const newMons = [...poketmons, '파이리']
//console.log(newMons) 
//console.log(newMons.length)

// 공백으로 처리한 부분은 skip 건너뛴다. 
const [first, second] = poketmons
console.log(first,second)
// 결과 : 피카츄, 고라파덕  
//const [first, , second] = poketmons => 결과 : 피카츄, 이상해씨 (건너뜀)

//------------------------------------------------------------------------------------------------


// 객체 구조분해 

const { nickname, age } = { 
  nickname : '최서우',
  age : 29
}
console.log(nickname,age)

//-----------------------------------------------------------------------------------------



// map 배열 메소드
// forEach / map 의 차이 
// map은 결과를 새로운 배열로 반환해준다. 

//const numbers = [1,2,3]
const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers)      //결과:  [2,4,6]

// const poketmons = ['피카츄', '고라파덕', '이상해씨']
// map을 활용해서 문자열을 더해주세요
// '너로 정했다' 
// namedPoketmon 
//console.log(namedPoketmon)
const namedPoketmon = poketmons.map(poketmon => poketmon + ', 너로 정했다' )
console.log(namedPoketmon) 