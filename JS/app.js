
//Slide Show
let slideIndex = 0;
slideshow();

function slideshow() {
    //Get the elements from the DOM
    let i;
    let slides = document.querySelectorAll(".slides");

    //loop through the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Increment the slide index
    slideIndex++;
    if ( slideIndex > slides.length) {
        slideIndex = 1;
    }
    //Display the images
    slides[slideIndex - 1].style.display = "block";
    //Set timer for the slides to show 3 secs
    setTimeout(slideshow, 3000);// Changes images every three seconds
}