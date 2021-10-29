//Menu Burger 
// récupération des éléments HTML Menu Burger
var menu_burger = document.querySelector('.menu-burger');
var close = document.querySelector('.x');
var burger = document.querySelector('.burger');
var scroll_index = document.querySelector('.slide');


function displayMenu() {
    menu_burger.classList.toggle('visible');
    burger.classList.toggle('invisible');
}

// événements sur les icônes (click)
burger.addEventListener('click', displayMenu);
close.addEventListener('click', displayMenu);

function scroll(){
    window.scrollTo({
        top: 800,
        left:0,
        behavior: "smooth"
    })
}
scroll_index.addEventListener('click', scroll);