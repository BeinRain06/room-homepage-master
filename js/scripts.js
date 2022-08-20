const slides = Array.from(document.querySelectorAll("[data-show_slide]"));
const prevBtn = document.querySelector(".icon_left");
const nextBtn = document.querySelector(".icon_right");
prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

function showPrevSlide() {
  slides.forEach((slide) => {
    const slideIndex = slide.getAttribute("data-showcase_slide");
    const isShow = slide.getAttribute("data-show_slide");
    if (isShow === "true" && slideIndex === "0") {
      slide.setAttribute("data-show_slide", "false");
      slide.setAttribute("data-showcase_slide", "1");
    } else if (isShow === "false" && slideIndex === "1") {
      slide.setAttribute("data-show_slide", "false");
      slide.setAttribute("data-showcase_slide", "-1");
    } else if (isShow === "false" && slideIndex === "-1") {
      slide.setAttribute("data-show_slide", "true");
      slide.setAttribute("data-showcase_slide", "0");
    }
  });
}

function showNextSlide() {
  slides.forEach((slide) => {
    const slideIndex = slide.getAttribute("data-showcase_slide");
    const isShow = slide.getAttribute("data-show_slide");
    if (isShow === "true" && slideIndex === "0") {
      slide.setAttribute("data-show_slide", "false");
      slide.setAttribute("data-showcase_slide", "-1");
    } else if (isShow === "false" && slideIndex === "1") {
      slide.setAttribute("data-show_slide", "true");
      slide.setAttribute("data-showcase_slide", "0");
    } else if (isShow === "false" && slideIndex === "-1") {
      slide.setAttribute("data-show_slide", "false");
      slide.setAttribute("data-showcase_slide", "1");
    }
  });
}

// Mobile Nav

const toggleHamburger = document.querySelector(".toggle_hamburger");

const mobileMenu = document.querySelector(".mobile-menu");

toggleHamburger.addEventListener("click", () => {
  const isToggled = mobileMenu.getAttribute("data-menu-toggled");

  if (isToggled === "false") {
    mobileMenu.setAttribute("data-menu-toggled", "true");
    toggleHamburger.setAttribute("aria-expanded", "true");
  } else {
    mobileMenu.setAttribute("data-menu-toggled", "false");
    toggleHamburger.setAttribute("aria-expanded", "false");
  }
});

// const doc= document.querySelector('body');
// const toggleHamb= document.querySelector('.toggle_hamburger');
// const toggleHambClose= document.querySelector('.hamburger_close');

// const forwards = 1;
// const backwards = -1;

// let showSlides= document.querySelectorAll('.show_slide');
// let spotSlides= document.querySelectorAll('.spot_sight');
// let navBtn= document.querySelectorAll('.nav_item');
// let n, m, slideIndex= 1, slideIndexLeft= showSlides.length ;

// window.onload= function(){
//   showSlides[0].style.setProperty("--display-slide", "block");
//   spotSlides[0].style.setProperty("--display-slide", "block");

//   showSlides[0].style.transform= "translateX(0%)";
//   showSlides[0].style.opacity="1";
//   showSlides[0].style.visibility="visible";
//   spotSlides[0].style.transform= "translateX(0%)";

// }

// doc.addEventListener('click', test);

// function test(e){
//   console.log(e.target);
// }

// doc.addEventListener('click', currentNavBtn);

// function currentNavBtn(e){
//   if(e.target.classList.contains('nav_item') && e.target.parentElement.parentElement.parentElement.classList.contains('nav_desktop')){
//     e.target.classList.add('current');

//     let i;
//     for(i=0; i<navBtn.length; i++){
//       if(navBtn[i] !== e.target){
//         navBtn[i].classList.remove('current');
//       }
//     }
//   } else if (e.target.classList.contains('nav_item') && e.target.parentElement.parentElement.parentElement.classList.contains('menu_content')){
//     e.target.style.setProperty("--border-display", "hsl(157, 42%, 33%)");
//     e.target.classList.add('current');

//     for(let i=0; i<navBtn.length; i++){
//       if(navBtn[i] !== e.target){
//         navBtn[i].classList.remove('current');
//       }
//     }
//   }
// }

// doc.addEventListener('click', slideToTheRightBoxLive);

// function slideToTheRightBoxLive(e){
//   if(e.target.classList.contains('icon_left')){
//     n= -1;

//     slideIndexLeft= slideIndexLeft + n;
//     console.log(slideIndexLeft);

//     if(slideIndexLeft < 0){
//       slideIndexLeft= showSlides.length - 1;
//     }
//     console.log(slideIndexLeft);

//     for(let i=0; i<showSlides.length; i++){
//       showSlides[i].style.setProperty("--display-slide", "hidden");
//       spotSlides[i].style.setProperty("--display-slide", "hidden");
//       showSlides[i].style.transform= "translateX(-140%)";
//     }
//     let k= slideIndexLeft;
//     showSlides[k].style.setProperty("--display-slide", "visible");
//     spotSlides[k].style.setProperty("--display-slide", "flex");

//     showSlides[k].style.transform= "translateX(0)";
//     showSlides[k].style.opacity="1";
//     showSlides[k].style.visibility="visible";
//     spotSlides[k].style.transform= "translateX(0%)";

//   } else if(e.target.classList.contains('icon_right')){
//     n=1;
//     slideIndex= slideIndex + n;
//     if(slideIndex > showSlides.length){
//       slideIndex= 1;
//     }else if (slideIndex < 1){
//       slideIndex= showSlides.length;
//     }
//     for(let i=0; i<showSlides.length; i++){
//       showSlides[i].style.setProperty("--display-slide", "hidden");
//       spotSlides[i].style.setProperty("--display-slide", "hidden");
//       showSlides[i].style.transform= "translateX(-140%)";
//     }
//     let k= slideIndex - 1;
//     showSlides[k].style.setProperty("--display-slide", "visible");
//     spotSlides[k].style.setProperty("--display-slide", "flex");

//     showSlides[k].style.transform= "translateX(0%)";
//     showSlides[k].style.opacity="1";
//     showSlides[k].style.visibility="visible";
//     spotSlides[k].style.transform= "translateX(0%)";
//   }
// }

// doc.addEventListener('click', bodyShadowedLive);

// function bodyShadowedLive(){
//   if(toggleHamb.checked === true){
//     doc.style.setProperty("--display-shadow-close", "visible");
//   } else if(toggleHamb.checked === false) {
//     doc.style.setProperty("--display-shadow-close", "hidden");
//   }
// }
