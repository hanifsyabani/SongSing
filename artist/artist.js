// click sidebar
$(document).ready(function(){
  $('sub-body').on('click', function(event){
    $(this).siblings().removeClass('activeArtist');
    $(this).addClass('activeArtist');
    event.preventDefault();
  });
});



const card = document.querySelector('.marie');

card.addEventListener('click', (e) =>{
  window.location.href='annieMarie.html';
  e.preventDefault();
});
