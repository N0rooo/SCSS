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

// Display p
var front = document.querySelector('.front');
var front_p = document.querySelector('.front_p');
var front_s = document.querySelector('.s_front');

var back = document.querySelector('.back');
var back_p = document.querySelector('.back_p');

var uiux = document.querySelector('.uiux');
var uiux_p = document.querySelector('.uiux_p');
var uiux_s = document.querySelector('.s_uiux');

var others = document.querySelector('.others');
var others_p = document.querySelector('.others_p');

var soft = document.querySelector('.soft');
var soft_p = document.querySelector('.soft_p');
var soft_s = document.querySelector('.s_soft');

if (document.title == "Skills"){
    function display(e){
        e.classList.toggle('visible_p');
    }
    function scrolls(e){
        window.scrollTo({
            top:e,
            left:0,
            behavior: "smooth"
        })
    }
    front.addEventListener('click', () => display(front_p));
    back.addEventListener('click', () => display(back_p));
    uiux.addEventListener('click', () => display(uiux_p));
    others.addEventListener('click', () => display(others_p));
    soft.addEventListener('click', () => display(soft_p));  
    

    
    front_s.addEventListener('click', () => scrolls(300));
    uiux_s.addEventListener('click', () => scrolls(850));
    soft_s.addEventListener('click', () => scrolls(1570));
}

// Summary
var mobile = document.querySelector('.mobile');
var teacher = document.querySelector('.teacher');
var pulv = document.querySelector('.pulv');
var website = document.querySelector('.website');
var kk = document.querySelector('.kk');

if (document.title == "Projects"){
    function scroll(e){
        window.scrollTo({
            top:e,
            left:0,
            behavior: "smooth"
        })
    }
    mobile.addEventListener('click', () => scroll(300));
    teacher.addEventListener('click', () => scroll(400));
    pulv.addEventListener('click', () => scroll(1570));
    website.addEventListener('click', () => scroll(4980));
    kk.addEventListener('click', () => scroll(5100));
}