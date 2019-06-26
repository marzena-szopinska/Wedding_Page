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

// IMAGE SLIDER
let slideIndex = 0;


const showSlides = () => {
  // target all dots
  // const dots = document.getElementsByClassName('dot');
  // create list of slides
  const slides = document.getElementsByClassName('slide');
  // loop through the array of slides
  for(let i = 0; i < slides.length; i++){
    // and hide all slides from the start
    slides[i].style.display = 'none';
    // slides[i].style.opacity = 0;
  }
  // increase the slide index by one
  slideIndex++;
  // check for slide index number
  if(slideIndex > slides.length){
    slideIndex = 1;
  }
  // loop through the array of dots
  // for(let i = 0; i < dots.length; i++){
  //   // remove any active classes
  //   dots[i].className = dots[i].className.replace(' active', '');
  //
  // }
  // target the specific image using slide index variable and show it on the page
   slides[slideIndex - 1].style.display = 'block';
  // slides[slideIndex - 1].style.opacity = 1;
  // target the specific dot that corresponds to the image above
  // dots[slideIndex - 1].className += ' active';

  // change the image every 3 seconds
  setTimeout(showSlides, 7000);
}

showSlides();
