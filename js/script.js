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

// ADD A BUTTON WHEN YOU SCROLLED PASSED THE HEADER

window.addEventListener('scroll', () => {

  // calculate the total scrollable height
  const totalScrollabeHeight = document.documentElement.scrollHeight - window.innerHeight;
  // show hom many pixels we scrolled
  const scrolled = window.scrollY;

  // if we scrolled to the bottom of the screen
  if(Math.ceil(scrolled) >= Math.ceil(totalScrollabeHeight) && window.matchMedia("(min-width: 768px)").matches){
    console.log('You reached the bottom!');
    // add the button to the DOM, only if it doesnt exist
    if(document.querySelector('.btn-white-back') === null){
          // create a button element
          let backButton = document.createElement('a');
          // add class and href attributes
          backButton.href = '#header';
          backButton.classList.add('btn-white-back');
          // add some text
          backButton.innerHTML = '<p>Top</p>';
          // add pulse class to fire fade in animation
          backButton.classList.add('pulse');
          // add the button to the dom before the script tag
          const script = document.querySelector('script');
          const body = document.querySelector('body');
          body.insertBefore(backButton, script);
          // add click event to the button
          addEventToTheButton(backButton);
        }
    }

    // if we are scrolling up...
    if(Math.ceil(scrolled) < (Math.ceil(totalScrollabeHeight) - 200) && window.matchMedia("(min-width: 768px)").matches){
      if(document.querySelector('.btn-white-back') != null){
        // remove the button
        const button = document.querySelector('.btn-white-back');
        button.remove();
      }
    }
});

// SLIDE IN ANIMATION
function debounce(func, wait = 20, immediate = true){
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function(){
      timeout = null;
      if(!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
  sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.offsetHeight / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.offsetHeight;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    // print values to the screen
    console.log('Is Half Shown: ' + isHalfShown); // ??
    console.log('Is Not Scrolled Past: ' + isNotScrolledPast);
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

// SMOOTH SCROLLING
function smoothScrolling(target, duration) {
  // store the clicked target
  const targett = document.querySelector(target);
  // get position from the target to the top of the screen
  const targetPosition = targett.getBoundingClientRect().top;
  // get how much px we scrolled down
  const startPosition = window.pageYOffset; // relative position to the window not to the element
  // get the distance between the two
  const distance = targetPosition - startPosition;
  // set the the start time
  let startTime = null;

  function animation(currentTime) {
      if(startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      // make use of the easing function
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run); // (x, y)
      if(timeElapsed < duration){
        requestAnimationFrame(animation); // makes our animation nice and smooth
      }
  }

  // add easing function that you can find on gizma.com/easing
  // t - timeElapsed
  // b - startPosition
  // c - distance
  // d - duration
  function ease(t, b, c, d){
    t /= d / 2;
    if(t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  // loop through the animation function at 60fps
  requestAnimationFrame(animation); // makes our animation nice and smooth
}

// add event listener to the navigation bar
navBar.addEventListener('click', (e) => {
  // if clicked element inside the navbar parent is an anchor
  if(e.target.tagName === 'A') {
    // store that target
    const target = e.target;
    // get the link of this target
    const link = target.getAttribute('href');
    // and play smooth scroll animation
    smoothScrolling(link, 2000);
  }
});

// if the button exists, add event listener to the button that takes to the top of the page
function addEventToTheButton(element){
  if(element != null){
    element.addEventListener('click', (e) => {
      // if the user gits the paragraph inside the anchor
      if(e.target.tagName === 'P'){
        // ...target the parent of the paragraph
        const pParent = e.target.parentNode;
        // ...get the href attribute of that parent
        const link = pParent.getAttribute('href');
        // ...play smooth animation
        smoothScrolling(link, 3000);
      }
      // if the user hits the anchor
      if( e.target.tagName === 'A') {
        // ...get the link
        const link = e.target.getAttribute('href');
        // ...play smooth animation
        smoothScrolling(link, 3000);
      }
    });
  }
}
