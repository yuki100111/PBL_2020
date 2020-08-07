var ham = document.getElementById('ham');
var ham_menu_wrapper = document.getElementById('ham_menu_wrapper');
var header = document.querySelector('header');

ham.addEventListener('click', function() {
  ham.classList.toggle('clicked');
  ham_menu_wrapper.classList.toggle('clicked');
});

window.onload = function() {
  document.getElementById('home_first_heading').style.opacity = "1";
  document.getElementById('home_first_txt').style.opacity = "1";

  setTimeout( function() {
    header.style.opacity = "1";
  }, 1500);
}
