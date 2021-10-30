//Menu Burger 
// récupération des éléments HTML Menu Burger
var menu_burger = document.querySelector('.menu-burger');
var close = document.querySelector('.x');
var burger = document.querySelector('.burger');



function displayMenu() {
    menu_burger.classList.toggle('visible');
    burger.classList.toggle('invisible');
}

// événements sur les icônes (click)
burger.addEventListener('click', displayMenu);
close.addEventListener('click', displayMenu);

var scroll_index = document.querySelector('.slide');

if (document.title == "Home"){
    function scroll(){
        window.scrollTo({
            top: 800,
            left:0,
            behavior: "smooth"
        })
    }
    scroll_index.addEventListener('click', scroll);
}

var front = document.querySelector('.front');
var front_p = document.querySelector('.front_p');

var back = document.querySelector('.back');
var back_p = document.querySelector('.back_p');

var uiux = document.querySelector('.uiux');
var uiux_p = document.querySelector('.uiux_p');

var others = document.querySelector('.others');
var others_p = document.querySelector('.others_p');

var soft = document.querySelector('.soft');
var soft_p = document.querySelector('.soft_p');

if (document.title == "Skills"){
    function displayFront(){
        front_p.classList.toggle('visible_p');
    }
    function displayBack(){
        back_p.classList.toggle('visible_p');
    }
    function displayUiux(){
        uiux_p.classList.toggle('visible_p');
    }
    function displayOthers(){
        others_p.classList.toggle('visible_p');
    }
    function displaySoft(){
        soft_p.classList.toggle('visible_p');
    }
    
    
    front.addEventListener('click', displayFront);
    back.addEventListener('click', displayBack);
    uiux.addEventListener('click', displayUiux);
    others.addEventListener('click', displayOthers);
    soft.addEventListener('click', displaySoft);

}

