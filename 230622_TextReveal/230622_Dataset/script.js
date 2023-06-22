const container = document.querySelectorAll('.container')

container.forEach(item => {
  //item -> 부모, container
  // container[0], container[1], container[2]
  //부모에서 bar를 찾고,
  const bar = item.querySelector('.bar')
  //부모에서 number을 찾고 
  const number = item.querySelector('.number')
  
  // bar.data-number -> 자바스크립트는 못알아듣는다.
  // bar.dataset-number -> 자바스크립트가 알아듣는다.
  // data-number의 값을 가져와서 dataNumber 할당 
  const dataNumber = bar.dataset.number;

  // number에 숫자 변경/삽입
  number.textContent = dataNumber;

  // bar 그래프의 width 값으로 퍼센트 표현
  bar.style.width = dataNumber +'%'
  //console.log(bar.dataset.number)
})




//console.log(dataNumber)