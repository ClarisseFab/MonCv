function addAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.classList.toggle("activeAccordion");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// Slider

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
    if(slideTime != 3000){
        clearInterval(slideInterval);
        slideTime = 3000;
        slideInterval = setInterval(() => changeSlide(true), slideTime);
    }
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

//Temporaire 

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";

    heart.innerText = '💗';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


function victoire() {
    clearTimeout(showHint);
    startHeart();
    var element = document.getElementById("codeCache");
    element.innerHTML ="Félicitations Craspouille 💗"
    element.classList.add("congrats");
}
function startHeart() {
    setInterval(createHeart, 50);
    var audio = new Audio('anatolia.mp3');
    audio.play();
}

//A Supprimer
//function doSomething() {
//    Console.log("Pour afficher la suite de l'énigme, lancer la fonction MontrerLInvisible()");
//    MontrerLInvisible();
//}

// a key map of allowed keys
var allowedKeys = {
    65: 'a',
    67: 'c',
    76: 'l',
    96: '0',
    103: '7'
};

var allowedShiftedKeys = {    
    48: '0',
    55: '7'
};

// the secret code sequence
var codeSecret = ['c', 'l', 'a', 'c', 'l', 'a', '0', '0', '7'];

// a variable to remember the 'position' the user has reached so far.
var codeSecretPosition = 0;

// add keydown event listener
document.addEventListener('keydown', function (e) {
    if (e.keyCode != 16) {
        // get the value of the key code from the key map
        var key = allowedKeys[e.keyCode];
        var shiftedkey;
        if (e.shiftKey) {
            shiftedkey = allowedShiftedKeys[e.keyCode];
        }

        // get the value of the required key from the secret code
        var requiredKey = codeSecret[codeSecretPosition];

        // compare the key with the required key

        if (e.shiftKey && shiftedkey == requiredKey || key == requiredKey) {

            // move to the next key in the secret code sequence
            codeSecretPosition++;

            // if the last key is reached, start hearts
            if (codeSecretPosition == codeSecret.length) {
                victoire();
                codeSecretPosition = 0;
            }
        } else {
            codeSecretPosition = 0;
        }
    }
});

function alertSecret() {
    clearTimeout(showHint);
    alert("console.log ? \nQu'est ce que c'est et où je peux voir ça ?");
    console.log("Todo List: Penser à supprimer le code commenté, ça fera plus propre !");
}

function MontrerLInvisible() {
    var element = document.getElementById("codeCache");
    element.style.display = "block";
}

const showHint = setTimeout(() => {
    alert("Début du jeu de piste : \nOn dirait qu'il y a quelque chose de changé ici, mais quoi ? \nOn dirait que ça ne tourne plus rond !");
}, 30000);

var clacla007 = "Non, bien essayé, mais c'est pas ici qu'il faut taper ça. Essaie directement sur la page peut etre ?"