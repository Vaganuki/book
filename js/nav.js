//Selection de la nav
const navigationBar = document.getElementById('nav');

//Selection des éléments nécessaires au changements de thèmes
const themeBtn=document.getElementById('theme');
const rond=document.getElementById('rondTheme');
const html=document.querySelector('html');
const audioDanse= new Audio('../ressources/Caramella Girls - Caramelldansen HD Version (Swedish Original).mp3');
let timer=5;

//Détection et définition du thème préféré par l'utilisateur
const themeUtil=localStorage.getItem('theme') || 'dark-theme';
html.classList.add(themeUtil);
html.classList.contains('dark-theme') ? rond.setAttribute('fill','none'): console.log();

//Selection des éléments du flash
const flash=document.getElementById('flashbang');
const audioFlash= new Audio('../ressources/flashbang.mp3');
if(html.classList.contains('dark-theme')){
    flash.classList.remove('hidden');
}

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
                if(html.classList.contains('dark-theme')){
                    html.classList.remove('dark-theme');
                    rond.setAttribute('fill','white');
                    html.classList.add('light-theme')
                    localStorage.setItem('theme', 'light-theme');
                    flash.classList.add('hidden');
                }
                else{
                    html.classList.remove('light-theme')
                    rond.setAttribute('fill','none');
                    html.classList.add('dark-theme');
                    localStorage.setItem('theme','dark-theme');
                    flash.classList.remove('hidden');
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