const list = document.querySelector('.list')
//Array.from('배열로 만들어줄 내용') = 배열로 만들어짐
const listItem = Array.from(list.querySelectorAll('.list-item'))
//console.log(listItem)

listItem.forEach(item => {
  item.addEventListener('click', ()=> {
    // 1. 일단 모든 요소에서 active 클래스를 삭제 
    listItem.forEach(item => item.classList.remove('active'))
    // 2. 내가 현재 누른 버튼에 active 클래스를 추가 
    item.classList.add('active')
  })
})



// const char = ['a', 'b', 'c', 'd']
// // i를 0,1,2,3 으로 증가시키는 for문
// for(let i = 0; i < char.length; i++){
//   console.log('for문으로 돌린 결과'+char[i])
// }

//배열 char안의 요소들의 길이에 맞게 알아서 증가시킨 값을 가져올
// forEach문에서는 item, index라는 매개변수
// char.forEach((i) => {
//   console.log("forEach로 돌린 결과" + i)
// })

