let workout = [
  {
    title : '크로스 핏',
    img : './images/img1.png'
  },
  {
    title : '웨이트 훈련',
    img : './images/img2.png'
  },  
  {
    title : '요가',
    img : './images/img3.png'
  }
]

// workout.forEach((item, i) => {
//   let cardItem = `
//     <div class="card-item">
//       <h2>${workout[i].title}</h2>
//       <div class="caption">
//         <p>Strength does not come from the physical capacity. It comes from an indomitable will. Know more</p>
//         <button type="button">Know more</button>
//       </div>
//       <img src="${workout[i].img}" alt="${workout[i].title} 이미지">
//     </div>
//   `

//   document.querySelector('.card-list').insertAdjacentHTML('beforeend', cardItem)
// })

workout.forEach((item) => {
  let cardItem = `
    <div class="card-item">
      <h2>${item.title}</h2>
      <div class="caption">
        <p>Strength does not come from the physical capacity. It comes from an indomitable will. Know more</p>
        <button type="button">Know more</button>
      </div>
      <img src="${item.img}" alt="${item.title} 이미지">
    </div>
  `

  document.querySelector('.card-list').insertAdjacentHTML('beforeend', cardItem)
})