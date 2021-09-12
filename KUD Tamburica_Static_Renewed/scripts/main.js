let burgerKing = document.getElementById("burger");
let menu = document.getElementById("menu");
let burgerLines = document.getElementsByClassName("burgerLine");
let mediaQuery = window.matchMedia("(max-width:768px)");

let left = document.getElementById("left");
let right = document.getElementById("right");
let images = document.getElementById("images");
let addNewsButton = document.getElementById("addNews");

let burgerOpened = false;
burgerKing.onclick = openBurger;

mediaQuery.addListener(normalize);

left.onclick = slideLeft;
right.onclick = slideRight;
let imageSources = ["pocet.jpg","orkestar-djakovo.JPG", "gogi_krsman.JPG", "selo-min.png" , "orkestar2017-min.png", "selo.png", "prviOrkestar.png", "blaks.png",
                    "badnjak_martin.png"];
let currentIndex = 0;


function slideRight() {
    let currImage = document.getElementById("currentImage");
    currentIndex = (++currentIndex) % imageSources.length;
    currImage.src = `images/slideshow/${imageSources[currentIndex]}`;
}

function slideLeft() {
    let currImage = document.getElementById("currentImage");
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;
    }
    currImage.src = `images/slideshow/${imageSources[currentIndex]}`;
}



function openBurger() {
    if (window.matchMedia("(max-width:768px)")) {
        if (burgerOpened == false) {
            menu.style.transform = "translateX(0%)";
            burgerOpened = true;
            

            burgerLines[1].style.transform ="rotate(45deg) translate(5px, 5px)";
            burgerLines[1].style.backgroundColor = "#ff4040";
            burgerLines[2].style.backgroundColor = "#ff4040";
            burgerLines[2].style.transform ="rotate(-45deg) translate(5px, -4px)";
            
            burgerLines[0].style.transform = "translateY(-200%)";
            burgerLines[0].style.background = "transparent";
            burgerLines[0].style.transition = "all 0.3s ease-out";
            

            disableScrolling();
        } else {
            menu.style.transform = "translateX(-100%)";
            burgerOpened = false;

            burgerLines[1].style.transform ="rotate(0deg) translate(0px, 0)";
            burgerLines[1].style.backgroundColor = "";
            burgerLines[2].style.backgroundColor = "";
            burgerLines[2].style.transform ="rotate(0deg) translate(0px, 0)";

            burgerLines[0].style.transform = "translateY(0%)";
            burgerLines[0].style.background = "";
            burgerLines[0].style.transition = "all 0.3s ease-out";
            enableScrolling();
        }
    } 
}

function disableScrolling(){
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function() { 
        window.scrollTo(x, y); 
    };
}

function enableScrolling(){
    window.onscroll = function(){};
}


function normalize(e) {
    if (!e.matches) {
        menu.style.transform = "translateX(0%)";
        burgerOpened = true;
    }
}