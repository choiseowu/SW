// AOS Animate On Scroll 

// 1. 유저가 스크롤을 얼마나 내렸는지 파악 
// window : 현재 html 페이지 (document랑 같은 개념)
// Scroll 이벤트에는 관습적으로 window를 부착한다.
window.addEventListener('scroll', function(){
  // 현재 페이지에서 얼마나 스크롤 됐는지 px 단위 : scrollY
  // 세로 스크롤 : scrollY , 가로 스크롤 : scrollX
  // console.log(window.scrollY + 'px');

  // 강제로 스크롤바를 특정 위치로 이동 => window.scrollTo(x,y)
  // window.scrollTo(0, 700);

  // 현재 페이지에서 100px 이상 스크롤 됐을 때 nav 태그의 배경색 변경
  if(100 <= window.scrollY) {
    document.querySelector('nav').style.backgroundColor = '#fff';
  } else {
    document.querySelector('nav').style.backgroundColor = '#ccc';
  }  
})

// 스크롤이 끝까지 됐을 때 alert 창으로 '스크롤 끝!' 
document.querySelector('.lorem').addEventListener('scroll', function(){
  // scrollTop, clientHeight, scrollHeight
  let 스크롤양 = document.querySelector('.lorem').scrollTop;
  // clientHeight : 박스가 화면에 보이는 높이값
  let 높이 = document.querySelector('.lorem').clientHeight;
  // scrollHeight : 박스에 스타일로 지정된 높이값이 아니라 스크롤 가능한 높이값 
  let 스크롤높이 = document.querySelector('.lorem').scrollHeight;
  console.log(스크롤양 + 높이,스크롤높이) ;

  if(스크롤양 + 높이 == 스크롤높이) {
    alert('스크롤 끝!');
  }
})

// window 스크롤 다 됐을 때 alert창 : '전체 스크롤 완료!'
window.addEventListener('scroll', function(){
  // documentElement == querySelector('html')
  let 문서스크롤양 = document.querySelector('html').scrollTop;
  let 문서높이 = document.querySelector('html').clientHeight;
  let 문서스크롤높이 = document.querySelector('html').scrollHeight;
  if(문서스크롤양 + 문서높이 == 문서스크롤높이){
    alert('전체 스크롤 완료!');
  }
})