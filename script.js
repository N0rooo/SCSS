// constante, impossible à modifier ult
const parallaxHome = document.querySelector('.title');

//function effet parallax
function paral(type){
    // écoute le sroll sur la page
    window.addEventListener('scroll', () => { //fonction fléchée, renvoi directement à la "funtion " qui suit sans avoir véritablement à en créer une
    type.style.backgroundPositionY = window.scrollY / 30 + "%"; //scroll le background sur l'axe Y plus lentelemnt (/30)
    });
}

if(document.title == "Home"){    
    paral(parallaxHome);
}