// // 1. 버튼을 변수에 담고
// //start, stop
// // 2. 버튼을 눌렀을 때 그 안의 텍스트 내용을 console.log로 출력
// //addEventListner

// const start = document.getElementById('start')
// const stop = document.getElementById('stop')


// start.addEventListener('click', () => {
//   console.log(start.textContent)
// })

// stop.addEventListener('click', () => {
//   console.log(stop.textContent)
// })


//1. title 변수 선언, plus , minus 변수에 담고, index 변수
//2. addEventListener를 각각 버튼마다 이벤트를 걸어주고, 
const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let index = 16;
const change = document.getElementById('change')


//3. plus를 눌렀을 때는 1px 씩 폰트 사이즈 증가 
// plus.style.fontSize =`${index}px`
plus.addEventListener('click', () => {
  index++ 
  title.style.fontSize =`${index}px`
})

//4. minus 눌렀을 때는 1px씩 폰트사이즈 감소 
minus.addEventListener('click', () => {
  index--
  title.style.fontSize =`${index}px`
})

//5. change 버튼을 눌렀을 때마다 title의 컬러가 변하도록 active 클래스로 제어 (추가/삭제)
// title.classList.contain('active') / true, false
// add() - 추가 , remove() - 제거 
change.addEventListener('click', () => {
  //title.classList.toggle('active')
  
  // setTimeout 사용, 1초뒤에 변경 
  // console.log('변경')
  setTimeout(() => {
  if(title.classList.contains('active')){
      title.classList.remove('active')
      console.log('active 삭제')
    }else {
      title.classList.add('active')
      console.log('active 추가')
    }
  },1000)
})
