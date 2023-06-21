//console.log(pointer)

window.addEventListener('mousemove',(event) => {
  const pointer = document.getElementById('pointer')
  //console.log('마우스 좌표 x값 : ' + event.clientX + '마우스 좌표 y값: ' + event.clientY)
  //console.log(`마우스 x값 : ${event.clientX}, 마우스 y값 : ${event.clientY}`)
  
  //pointer.style.top = `${event.clientY}px`;
  //pointer.style.left = `${event.clientX}px`;
  //pointer.style.top = event.clientX + 'px'
  //pointer.style.top = event.clientY + 'px'

  //event객체에서 사용자의 x값을 가져와서, pointer의 가로값 (36)을 반으로 나눈 18px를 뺀다.
  //ex) x값이 100일 경우, 100 - 18 , 82px, 커서는 위치가 82px
  pointer.style.top = `${event.clientY - (pointer.offsetHeight / 2)}px`
  pointer.style.left = `${event.clientX - (pointer.offsetWidth / 2)}px`

  //clientWidth, clientHeight의 경우에는 margin, border 사이즈를 무시한다.
  //clientWidth, clientHeight는 border : (1px solid white)포함 36px 사이즈를 인식하지 못하고, 좌우상하 1px씩 제외한 34px만 인식한다.
  //console.log(pointer.clientWidth)

  //offsetWidth는 border 사이즈도 포함해서 가져온다.
  //console.log(pointer.offsetWidth)
  console.log(pointer.offsetWidth)
})
