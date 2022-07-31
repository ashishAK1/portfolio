// Automatic slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Auto type
var typed = new Typed(".auto-type", 
{
        strings:["Web Developer","C++ Programmer","Technical Content Writer @ GFG"],
        typeSpeed:75,
        backSpeed:50,
        loop:true

    }

)