// Array 안에 object 
let products = [
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1030a9-2a47-437e-8970-e1530bccebfc/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-se-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-Dm5AWtOO.png',
    title : '에어 조던 1 미드 SE',
    price : '169,000 원',
    size : ['220', '225', '230', '235']
  }
]

document.querySelector('.box-item img').src = products[0].img;
document.querySelector('.sho-info h2').innerHTML = products[0].title;
document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;