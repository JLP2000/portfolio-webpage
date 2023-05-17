let slideIndex = 1;
showSlides(slideIndex);
// showSlidesAuto();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-list");
  // console.log(slides[0].children[0].style);
  // let dots = document.getElementsByClassName("dot");
  if (n > slides[0].children.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides[0].children.length;
  }
  for (i = 0; i < slides[0].children.length; i++) {
    slides[0].children[i].style.display = "none";
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  console.log(`Slide Index: ${slideIndex}`);

  slides[0].children[slideIndex - 1].style.display = "inline";
  //   dots[slideIndex-1].className += " active";
}

function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("project-list");
  for (i = 0; i < slides[0].children.length; i++) {
    slides[0].children[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides[0].children.length) {
    slideIndex = 1;
  }
  slides[0].children[slideIndex - 1].style.display = "block";
  setTimeout(showSlidesAuto, 8000); // Change image every 2 seconds
}
