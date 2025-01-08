//Selection de la nav
const navigationBar = document.getElementById('nav');

//Selection des éléments nécessaires au changements de thèmes
const themeBtn=document.getElementById('theme');
const rond=document.getElementById('rondTheme');
const html=document.querySelector('html');
const audioDanse=document.getElementById('caramelleDanse');
let timer=5;

//Selection des éléments du flash
const flash=document.getElementById('flashbang');
const audioFlash=document.getElementById('flashAudio');

//Animation de la navigation
window.addEventListener('scroll', function(event) {
    if (window.scrollY > 0) {
        navigationBar.classList.add('show');
    }
    else{
    navigationBar.classList.remove('show');
    }
});

//Bouton du theme Clair/Sombre/Négatif(s)/Disco
themeBtn.addEventListener('click', (evt)=>{
    //reset du timer
    clearTimeout(timer);
    //début de la foction
    timer=setTimeout(()=>{
        if(evt.detail===5){
            html.classList.add('wow');
            audioDanse.play();
        }
        else{
            html.classList.remove('wow');
            audioDanse.pause();
            if(evt.detail===3){
                //Easter egg en cas de triple clique
                html.classList.add('invert');
            }
            else{
                html.classList.remove('invert');
                    //Reset de l'easter egg + check du fill
                    let fillCheck=rond.getAttribute('fill');
                    //Si "l'ampoule" est allumée alors on passe en thème sombre, sinon en thème clair
                    if(fillCheck=='white'){
                        rond.setAttribute('fill','none');
                        html.classList.add('darkTheme');
                        flash.classList.remove('hidden');
                    }
                    else{
                        rond.setAttribute('fill','white');
                        html.classList.remove('darkTheme');
                        flash.classList.add('hidden');
                    }
            }
        }
    }, 5);
});

//Fonction de flash
flash.addEventListener('click',()=>{
    audioFlash.play();
    setTimeout(()=>{
        html.classList.add('flash');
    },500);
    setTimeout(()=>{
        html.classList.remove('flash');
    }, 8000);
});