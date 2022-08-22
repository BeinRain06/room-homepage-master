const slides = Array.from(document.querySelectorAll("[data-show_slide]"));
const doc = document.querySelector("body");
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

    doc.style.setProperty("--shadow-enabled", "visible");
    doc.style.setProperty("--translate-width", "100vw");
    
  } else {
    mobileMenu.setAttribute("data-menu-toggled", "false");
    toggleHamburger.setAttribute("aria-expanded", "false");

    doc.style.setProperty("--shadow-enabled", "hidden");
    doc.style.setProperty("--translate-width", "5vw");
  }
});
