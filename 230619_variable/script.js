// //const
// //var text = "text content"
// const app = document.getElementById('app')
// //app.textContent = text;

// for(let i = 0; i < 10; i++){
//   console.log(i)
//   const text = 'text';
//   console.log(text)
// }

//버튼을 눌렀을때, 값이 증가한다.
//버튼을 변수저장
const btnInc = document.getElementById('increase')
const btnDec = document.getElementById('decrease')
//console.log(btnInc)
//number라는 변수에 id-number 저장 
const content = document.getElementById('content')
//console.log(number)
//초기화 된 숫자값
let originNumber = 0

//btnInc 눌렀을 때 숫자증가
btnInc.addEventListener('click', () => {
  inc(originNumber,content, true)
}) 
const money = 100
//btnDnc 눌렀을 때 숫자 감소
btnDec.addEventListener('click', () => {
  inc(originNumber,content, false)
})


//함수 정의
function inc (number, content, check){
  if(check === true){
    number = number + money;
  }else{
    if(number > 0){
      number= number - money;
    }
  }
  content.textContent = number
  originNumber = number
  //console.log = (originNumber)
}

