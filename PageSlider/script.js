let slideIndex = 0;
var slideTime = 3000;
let slideInterval = setInterval(() => changeAndReset(), slideTime);

function jumpSlide(forward) {
    clearInterval(slideInterval);
    changeSlide(forward)
    slideTime = 7000;
    slideInterval = setInterval(() => changeAndReset(), slideTime);
}

function changeAndReset() {
    changeSlide(true);
    clearInterval(slideInterval);
    slideTime = 3000;
    slideInterval = setInterval(() => changeSlide(true), slideTime);
}
function currentSlide(n) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName("dot");

    clearInterval(slideInterval);

    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');

    slideIndex = n;
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');   


    slideTime = 7000;
    slideInterval = setInterval(() => changeAndReset(), slideTime);
}

function changeSlide(forward) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName("dot");

    slides[slideIndex].classList.remove('active');
    dots[slideIndex].classList.remove('active');


    if (forward) {
        if (slideIndex + 1 > slides.length - 1) {
            slides[0].classList.add('active');
            dots[0].classList.add('active');
            slideIndex = 0;
        } else {
            slides[slideIndex + 1].classList.add('active');
            dots[slideIndex + 1].classList.add('active');
            slideIndex++;
        }
    } else {
        if (slideIndex - 1 < 0) {
            slides[slides.length - 1].classList.add('active');
            dots[slides.length - 1].classList.add('active');
            slideIndex = slides.length - 1;
        } else {
            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
            slideIndex--;
        }
    }
}
