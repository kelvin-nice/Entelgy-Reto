//Contenedores
const mainContent = document.querySelector('.mainContent');
const continentes = document.querySelector('#continentes');
            
//Contenedores del Box Modal
const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');


//Eventos del Box Modal
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
 
popup.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});



//Box Modal de cada componentes después de clickear en el Título
const modalUno = document.querySelector('#uno');
        modalUno.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`       
        });


const modalDos = document.querySelector('#dos');
        modalDos.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalTres = document.querySelector('#tres');
        modalTres.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalCuatro = document.querySelector('#cuatro');
        modalCuatro.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> North America </h3>`
        });

    
const modalCinco = document.querySelector('#cinco');
        modalCinco.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> North America </h3>`
        });

const modalSeis = document.querySelector('#seis');
        modalSeis.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalSiete = document.querySelector('#siete');
        modalSiete.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> North America </h3>`
        });

const modalOcho = document.querySelector('#ocho');
        modalOcho.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalNueve = document.querySelector('#nueve');
        modalNueve.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalDiez = document.querySelector('#diez');
        modalDiez.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalOnce = document.querySelector('#once');
        modalOnce.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });

const modalDoce = document.querySelector('#doce');
        modalDoce.addEventListener('click', () => {
            popup.style.display = 'block';
            continentes.innerHTML= `<h3> South America </h3>`
        });