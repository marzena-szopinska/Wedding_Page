// grab hamburger element
const hamburger = document.getElementById('hamburger');
// grab the nav bar element
const navBar = document.querySelector('.nav-bar');
let displayHamburger = true;
// click event responsible for changing the hamburger icon
hamburger.addEventListener('click', () => {
  // if displayHamburger is true...
  if(displayHamburger){
    //.. set displayHamburger to false
    displayHamburger = false;
    //.. remove specific part of the class
    hamburger.classList.remove('fa-bars');
    //.. and insert another class to chnage the apperience of the hamburger into cross
    hamburger.classList.add('fa-times-circle');
    //.. add additional class to the nav-bar
    navBar.classList.add('show');
  } else { // otherwise
    //.. set displayHamburger to true
    displayHamburger = true;
    //.. remove specific part of the class
    hamburger.classList.remove('fa-times-circle');
    //.. and insert another class to chnage the apperience of the cross into hamburger
    hamburger.classList.add('fa-bars');
    //.. remove additional class to the nav-bar
    navBar.classList.remove('show');
  }
});
