// grab hamburger menu
const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.nav-bar');
let displayHamburger = true;

hamburger.addEventListener('click', () => {
  if(displayHamburger){
    displayHamburger = false;
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times-circle');
    navBar.classList.add('show');
  } else {
    displayHamburger = true;
    hamburger.classList.remove('fa-times-circle');
    hamburger.classList.add('fa-bars');
    navBar.classList.remove('show');
  }
});
