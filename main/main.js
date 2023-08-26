// click sidebar
$(document).ready(function(){
  $('sub-body').on('click', function(e){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
});


var swiper = new Swiper(".swiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




