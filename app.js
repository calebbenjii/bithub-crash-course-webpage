


document.getElementById('touch').addEventListener('click', function(e) {
  e.preventDefault();

  document.getElementById('sidebar').classList.toggle('open');

  document.querySelector('.line3').classList.toggle('hide');

  document.querySelector('.line1').classList.toggle('rotate');

  document.querySelector('.line2').classList.toggle('rotate');

})