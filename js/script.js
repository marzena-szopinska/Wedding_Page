// SETTING UP THE HAMBURGER MENU

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
// call the function
showSlides();

// ELEMENT INSERTION

// insert divider image when the screen is 1024px or wider
// target the footer and the container inside it
// const footerContainer = document.querySelector('footer').querySelector('.container');
// console.log(footerContainer);
// // if the screen is 1024px or wider add the image
// if (window.matchMedia("(min-width: 768px)").matches) {
//   //<img src='images/divider-flower.png' alt='flower' class='divider'>
//   let newDivider = document.createElement('img');
//   // add a class
//   newDivider.classList.add('divider');
//   // set the source attribute
//   newDivider.src = 'images/divider-flower.png';
//   // set alternative text if the image wont show up
//   newDivider.alt =  'gray flower';
//   // insert the image element to the DOM
//   footerContainer.appendChild(newDivider);
// }
