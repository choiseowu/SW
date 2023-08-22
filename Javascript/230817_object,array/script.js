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
  },
  {
    img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/5e90af51-c6cd-4426-ad31-5f34ac7df0ee/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EC%A4%8C-%EB%B3%B4%EB%A9%94%EB%A1%9C-5-wolf-grey-and-black-fj5474-133-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
    title : '나이키 줌 보메로 5 프리미엄',
    price : '219,000 원',
    size : ['220', '225', '230', '235']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/983e28fc-5aa7-4558-90b1-98f50518ef2f/%EC%97%90%EC%96%B4-%EB%A6%AC%ED%94%84%ED%8A%B8-%EB%B8%8C%EB%A6%AC%EB%93%9C-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-cKtglYTr.png',
    title : '나이키 에어 리프트 브리드',
    price : '103,200 원',
    size : ['220', '225', '230', '235']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/377c76b2-38e9-4728-9c98-61aff77543c8/%ED%8F%B0%ED%83%84%EC%B9%B4-%EC%99%80%ED%94%8C-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-HAwnuJaa.png',
    title : '나이키 폰탄카 와플',
    price : '77,300 원',
    size : ['220', '225', '230', '235']
  }
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

// let boxItems = document.querySelectorAll('.box-item');

// boxItems.forEach(function(item, index){
//   item.querySelector('img').src = products[index].img;
//   item.querySelector('.sho-info h2').innerHTML = products[index].title;
//   item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
//   item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
// })


// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 바인딩 
// 전문 용어로 '데이터 바인딩' 이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구 (React, Vue, angular)
// 시작 기호가 대괄호[], 중괄호{}냐에 따라서 
// Array, object 구분


// Javascript로 html 요소 생성 
// createElement('태그이름')
// let h1Tag = document.createElement('h1');
// h1Tag.innerHTML = '안녕하세요!';
// h1Tag.classList.add('hi');
// document.querySelector('.box-list').appendChild(h1Tag);

// box-list 안에 p태그로 생성
// let pTag = document.createElement('p');
// pTag.innerHTML = 'createElemnet로 p 태그 생성';
// document.querySelector('.box-list').appendChild(pTag);


// createElement로 products length만큼 html 생성 
// .box-list 안에 .box-item이라는 class를 가진 div 생성
// .box-item 안 
// 1. img tag 생성 src = products.img / alt = products.title
// 2. .box-list 안에 .sho-info라는 class를 가진 div 생성
// 3. .sho-info 안에 h2 tag 생성 => innerHTML = products.title
// 4. .sho-info 안에 p tag 생성 => innerHTML = products.price
// 5. .sho-info 안에 p tag 생성 => innerHTML = products.size

// let boxList = document.querySelector('.box-list');

// products.forEach(function(item){
//   let boxItem = document.createElement('div');
//   boxItem.classList.add('box-item');
//   boxList.appendChild(boxItem);

//   let boxImg = document.createElement('img');
//   boxImg.src = item.img;
//   boxImg.alt = item.title;
//   boxItem.appendChild(boxImg);

//   let shoInfo = document.createElement('div');
//   shoInfo.classList.add('sho-info');
//   boxItem.appendChild(shoInfo);
  
//   let boxTitle = document.createElement('h2');
//   boxTitle.innerHTML = item.title;
//   shoInfo.appendChild(boxTitle);

//   let boxPrice = document.createElement('p');
//   boxPrice.innerHTML = item.price;
//   shoInfo.appendChild(boxPrice);

//   let boxSize = document.createElement('p');
//   boxSize.innerHTML = item.size;
//   shoInfo.appendChild(boxSize);
// })


// Javascript로 html 생성하는 방법2 (최신문법)
// let pTag = '<p class="txt">생성</p>';
// .insertAdjacentHTML(위치,문자) => 문자형 html을 넣어주는 함수 
// 첫번째 파라미터 : 추가 할 위치 (beforeend = 안쪽 맨 밑)
// 두번째 파라미터 : 추가 할 html 문자 
// document.querySelector('.box-list').insertAdjacentHTML('beforeend', pTag);

// insertAdjacentHTML로 .box-item 완성 
let boxList = document.querySelector('.box-list');

products.forEach(function(item, index){
  let boxItem = `<div class="box-item"></div>`;
  document.querySelector('.box-list').insertAdjacentHTML('beforeend', boxItem);

  let boxImg = `<img src="${item.img}" alt="${item.title}">`
  document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', boxImg);

  let shoInfo = `<div class="sho-info"></div>`;
  document.querySelectorAll('.box-item')[index].insertAdjacentHTML('beforeend', shoInfo); 

  let boxTitle = `<h2>${item.title}</h2>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxTitle); 

  let boxPrice = `<p>${item.price}</p>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxPrice); 

  let boxSize = `<p>${item.size}</p>`;
  document.querySelectorAll('.sho-info')[index].insertAdjacentHTML('beforeend', boxSize); 
})