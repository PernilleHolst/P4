// //dots and prev, next
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides (slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides (slideIndex = n);
// }

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName(dots);
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = n }

//    for (i = 0; i < slides.length; i++) {
//         slides [i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active")
//     }
//     Slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active"; 
// }


// //Auto slide
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName ("mySlides");
//     for (i=0; i < slides.length; i++) {
//         slides [i].style.display = "none";
//     }

//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1
//     }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 6000); 
//     //change image every 6 seconds
// }

    
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// // Auto slide
// var autoSlideIndex = 0;
// autoShowSlides();

// function autoShowSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     autoSlideIndex++;
//     if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[autoSlideIndex - 1].style.display = "block";
//     dots[autoSlideIndex - 1].className += " active";
//     setTimeout(autoShowSlides, 6000); // Change image every 6 seconds
// }

