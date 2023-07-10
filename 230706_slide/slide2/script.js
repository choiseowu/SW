let buttons = document.querySelectorAll('.btn-group button');


// forEach 파라미터
// 1. 배열을 반복한 값
// 2. 배열의 인덱스 값
// 0,1,2 / translateX 0 -100 -200 

// click 이벤트 추가 => 첫번째 매개변수 (btn) 
buttons.forEach((btn,index) => {
 btn.addEventListener('click', () => {
  let slideList = document.querySelector('.slide-list');
  let xValue = -index * 100 + 'vw';
  // slideList.style.transform = 'translateX(' + xValue + ')'
  slideList.style.transform = `translateX(${xValue})`;

  // buttons라는 배열을 한번 더 돌면서 모든 버튼이 가지고 있는 active class를 
//   // remove 시켜준다.
//   buttons.forEach((otherBtn) => {
//     otherBtn.classList.remove('active');
//   })
//   // 클릭된 버튼에만 active class 추가 
  btn.classList.add('active');

  // 조건문 
  // 현재 클릭되어 있는 버튼이 아닐 때 && active라는 class를 포함하고 있다면 
  // 위 조건이 true일 때 active class remove
buttons.forEach(function(otherBtn){
  if(otherBtn !== btn && otherBtn.classList.contains('active')){
    otherBtn.classList.remove('active');
  }
  })

  })
})

