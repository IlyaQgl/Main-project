// header-menu
  
let burgerButton = document.getElementById('header-button');
let burgerMenu = document.getElementById('burger-menu');

burgerButton.addEventListener('click', function(){
  burgerMenu.style.display = (burgerMenu.style.display == 'block') ? 'none' : 'block';
});  

// map

let mapButton = document.getElementById('mapButton');
let mapBlock = document.getElementById('mapBlock');

mapButton.addEventListener('click', function(){
    mapBlock.style.display = (mapBlock.style.display == 'block') ? 'none' : 'block';
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



