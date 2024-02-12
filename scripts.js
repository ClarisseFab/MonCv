// JavaScript source code
imgPath = new Array;
SiClickGoTo = new Array;
version = navigator.appVersion.substring(0, 1);
if (version >= 3) {
    i0 = new Image;
    i0.src = 'IMG_8925.JPG';
    SiClickGoTo[0] = "https://fr.linkedin.com/in/clarisse-fabr%C3%A8ges";
    imgPath[0] = i0.src;
    i1 = new Image;
    i1.src = 'IMG_8885.JPG';
    SiClickGoTo[1] = "https://fr.linkedin.com/in/clarisse-fabr%C3%A8ges";
    imgPath[1] = i1.src;
}
a = 0;
function StartAnim() {
    if (version >= 2) {
        document.write('<a href="#" onclick="ImgDest();return(false)"><img src="IMG_8925.JPG" border="0" alt="Menu" name="defil" /></a>');
        defilimg()
    }
    else {
        document.write('<a href="https://fr.linkedin.com/in/clarisse-fabr%C3%A8ges"><img src="IMG_8925.JPG" border="0" /></a>')
    }
}
function ImgDest() {
    document.location.href = SiClickGoTo[a - 1];
}

function defilimg() {
    if (a == 2) {
        a = 0;
    }
    if (version >= 2) {
        document.defil.src = imgPath[a];
        tempo3 = setTimeout("defilimg()", 4000);
        a++;
    }
}

function addAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}
