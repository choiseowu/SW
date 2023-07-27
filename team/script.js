// 헤더부분 로그인
console.log(123)
document.querySelector('.open-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.add('is-open');
})


document.querySelector('.close-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.remove('is-open');
})


document.querySelector('.overlay').addEventListener('click', function(e){
  if(e.target == document.querySelector('.overlay')) {
    document.querySelector('.overlay').classList.remove('is-open');
  }
})

//main 

let cur = 0;
let len = $('.slide-item').length;


function sliding(dir){
  cur = cur + dir;
  if(cur >= len){
    cur = 0
  }else if(cur < 0){
    cur = len - 1;
  }
 
  $('.slide-item').eq(cur).siblings('.slide-item').stop().fadeOut();

  $('.slide-item').eq(cur).stop().fadeIn(function(){
    $(this).siblings('.slide-item').children('p').css({
      marginTop : "20px", 
      opacity : 0
    })
    $(this).children('p').stop().animate({
      marginTop : 0,
      opacity : 1
    }, 600)
  });
}

sliding(0)

$('#slide-prev').click(function(){sliding(-1)});
$('#slide-next').click(function(){sliding(1)});

let auto = setInterval(sliding, 5000, 1);
