// sidebar
$(document).ready(function(){
  $('sub-body').on('click', function(e){
    $(this).siblings().removeClass('activeExplore');
    $(this).addClass('activeExplore');
    e.preventDefault();
  });
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

