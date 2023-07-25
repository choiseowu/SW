// 0번 버튼을 클릭했을 때 0번째 tab-item한테 blue 클래스 추가
// 0번 째 tab-content한테 show 클래스 추가 

// $('.tab-item').eq(0).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(0).addClass('show');
// })

// $('.tab-item').eq(1).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-item').eq(2).on('click', function(){
//   $('.tab-item').removeClass('blue');
//   $('.tab-content').removeClass('show');

//   $(this).addClass('blue');
//   $('.tab-content').eq(2).addClass('show');
// })



// 코드를 확장성 있게 작성 
// 반복문을 이용해서 .tab-item class length 만큼 반복 
for(let i = 0; i < ('.tab-item').length; i ++){
  $('.tab-item').eq(i).on('click', function(){
    $('.tab-item').removeClass('blue');
    $('.tab-content').removeClass('show');

    $(this).addClass('blue');
    $('.tab-content').eq(i).addClass('show');
  })
}