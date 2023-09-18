// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항 연산자
let person = {
  name : 'John',
  age : 29
}

// 삼항 연산자
// 조건 ? 참일 때 실행 할 코드 : 거짓일 때 

// person 이라는게 존재한다면, person.name
// 없다면 console.log에 '없다'
console.log(person ? person.name : '없다')

// age가 18살 이상이라면 '성인입니다'
// 아니라면 '미성년자입니다.'
console.log(person.age >= 18 ? '성인입니다': '미성년자입니다')

// 삼항 연산자 다중 조건
// 65세 이상은 '노인입니다'
console.log((person.age >= 65) ? '노인입니다' : (person.age >= 18) ? '성인입니다' : '미성년자입니다')