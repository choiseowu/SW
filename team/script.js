let cur = 0;
let len = $('.slide-item').length;

for(i = 0; i < len; i++){
  $('#slide-dots').append('<div></div>');
}

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

  $('#slide-dots div').removeClass('is-active');
  $('#slide-dots div').eq(cur).addClass('is-active');
}

sliding(0)

$('#slide-prev').click(function(){sliding(-1)});
$('#slide-next').click(function(){sliding(1)});

let auto = setInterval(sliding, 5000, 1);

$('#slide-dots div').click(function(){
  cur = 0;
  let num = $(this).index()
  sliding(num);
})