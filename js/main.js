// hamburger menu

let menuBtn = document.querySelector('.menu-btn');

// desktop
menuBtn.addEventListener('click', function(){
document.querySelector('nav').classList.toggle('nav-active');
})

// mobile
menuBtn.addEventListener('touched', function(){
  document.querySelector('nav').classList.toggle('nav-active');
})