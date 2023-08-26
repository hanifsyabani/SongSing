
const shows = document.getElementById('show-more');
const card= document.querySelector('.card-hide');

shows.addEventListener('click', function(){
  card.classList.toggle('tampil');
  if (card.classList.contains('tampil')) {
    shows.innerHTML = 'Show less';
  } else {
    shows.innerHTML = 'Show more';
  }
});