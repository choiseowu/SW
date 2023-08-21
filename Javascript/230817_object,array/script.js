// Array 안에 object 
let products = [
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb1030a9-2a47-437e-8970-e1530bccebfc/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EB%AF%B8%EB%93%9C-se-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-Dm5AWtOO.png',
    title : '에어 조던 1 미드 SE',
    price : '169,000 원',
    size : ['220', '225', '230', '235']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bdcce975-dafc-4d91-867e-5948439aafb4/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EC%97%98%EB%A6%AC%EB%B2%A0%EC%9D%B4%ED%8A%B8-%ED%95%98%EC%9D%B4-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-3eEjqE30.png',
    title : '에어 조던 1 엘리베이트 하이',
    price : '179,000 원',
    size : ['220', '225', '230', '235']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4c3060c0-d367-4627-b054-5e9c52a9d7ce/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-1-%EC%97%98%EB%A6%AC%EB%B2%A0%EC%9D%B4%ED%8A%B8-%EB%A1%9C%EC%9A%B0-se-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-TADsPTsd.png',
    title : '에어 조던 1 엘리베이트 로우 SE',
    price : '169,000 원',
    size : ['220', '225', '230', '235']
  }
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(function(item, index){
  item.querySelector('img').src = products[index].img;
  item.querySelector('.sho-info h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
})


// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 바인딩 
// 전문 용어로 '데이터 바인딩' 이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구 (React, Vue, angular)
// 시작 기호가 대괄호[], 중괄호{}냐에 따라서 
// Array, object 구분


// Javascript로 html 요소 생성 
// createElement('태그이름')
let h1Tag = document.createElement('h1');
h1Tag.innerHTML = '안녕하세요!';
h1Tag.classList.add('hi');
document.querySelector('.box-list').appendChild(h1Tag);

// box-list 안에 p태그로 생성
let pTag = document.createElement('p');
pTag.innerHTML = 'createElemnet로 p 태그 생성';
document.querySelector('.box-list').appendChild(pTag);