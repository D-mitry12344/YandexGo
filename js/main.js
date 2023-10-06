const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

window.addEventListener('scroll', function() {
  if(pageYOffset > 600 && pageYOffset < 1900){
  	document.querySelector('#btn-fixed-club').style.display="block";
  	setTimeout(()=>{document.querySelector('#btn-fixed-club').style.bottom="10%"} , 100)
  }else{
  	setTimeout(()=>{document.querySelector('#btn-fixed-club').style.display=""} , 100)
  	document.querySelector('#btn-fixed-club').style.bottom="";
  }
});