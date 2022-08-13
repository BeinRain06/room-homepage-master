const doc= document.querySelector('body');
const toggleHamb= document.querySelector('.toggle_hamburger');

const forwards = 1;
const backwards = -1;

let showSlides= document.querySelectorAll('.show_slide');
let spotSlides= document.querySelectorAll('.spot_sight');
let navBtn= document.querySelectorAll('.nav_item');
let n, slideIndex= 1;

window.onload= function(){
  showSlides[0].style.setProperty("--display-slide", "block");
  spotSlides[0].style.setProperty("--display-slide", "block");
}


doc.addEventListener('click', test);

function test(e){
  console.log(e.target);
}

doc.addEventListener('click', currentNavBtn);

function currentNavBtn(e){
  if(e.target.classList.contains('nav_item') && e.target.parentElement.parentElement.parentElement.classList.contains('nav_desktop')){
    e.target.classList.add('current');

    let i;
    for(i=0; i<navBtn.length; i++){
      if(navBtn[i] !== e.target){
        navBtn[i].classList.remove('current');
      }
    }
  } else if (e.target.classList.contains('nav_item') && e.target.parentElement.parentElement.parentElement.classList.contains('menu_content')){
    e.target.style.setProperty("--border-display", "hsl(157, 42%, 33%)");
    e.target.classList.add('current');
  
    for(let i=0; i<navBtn.length; i++){
      if(navBtn[i] !== e.target){
        navBtn[i].classList.remove('current');
      }
    }
  }
}


doc.addEventListener('click', slideToTheRightBoxLive);

function slideToTheRightBoxLive(e){
  if(e.target.classList.contains('icon_left')){
    n= -1;
    slideIndex= slideIndex + n;
    if(slideIndex> showSlides.length){
      slideIndex= 1;
    }else if (slideIndex < 1){
      slideIndex= showSlides.length;
    }
    for(let i=0; i<showSlides.length; i++){
      showSlides[i].style.setProperty("--display-slide", "none");
      spotSlides[i].style.setProperty("--display-slide", "none");
    }
    let k= slideIndex - 1;
    showSlides[k].style.setProperty("--display-slide", "block");
    spotSlides[k].style.setProperty("--display-slide", "block");

  } else if(e.target.classList.contains('icon_right')){
    n=1;
    slideIndex= slideIndex + n;
    if(slideIndex> showSlides.length){
      slideIndex= 1;
    }else if (slideIndex < 1){
      slideIndex= showSlides.length;
    }
    for(let i=0; i<showSlides.length; i++){
      showSlides[i].style.setProperty("--display-slide", "none");
      spotSlides[i].style.setProperty("--display-slide", "none");
    }
    let k= slideIndex - 1;
    showSlides[k].style.setProperty("--display-slide", "block");
    spotSlides[k].style.setProperty("--display-slide", "block");
  }
}

doc.addEventListener('click', bodyShadowedLive);

function bodyShadowedLive(){
  if(toggleHamb.checked === true){
    doc.style.setProperty("--display-shadow", "block");
  } else {
    doc.style.setProperty("--display-shadow", "none");
  }
}