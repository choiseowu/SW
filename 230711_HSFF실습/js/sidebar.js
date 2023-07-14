let openBtn = document.querySelector('.gnb-open-btn');
let sidebar = document.querySelector('.sidebar');
let closeBtn = document.querySelector('.sidebar-btn');
// gnb-open-btn을 클릭했을 때 sidebar.active class add 

openBtn.addEventListener('click', function(){
  sidebar.classList.add('active');
})

closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('active');
})