$(document).ready(function(){
  $('sub-body').on('click', function(e){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
});


var rellax = new Rellax('.rellax', {
  speed: 1,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});


const arrowIcon = document.querySelector('.bxs-chevron-down');
const boxInfo = document.querySelector('.box-info');

arrowIcon.addEventListener('click', function(){
  boxInfo.classList.toggle('active')
});


