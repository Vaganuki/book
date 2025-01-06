const navigationBar = document.getElementById('nav');

const themeBtn=document.getElementById('theme');
const rond=themeBtn.querySelectorAll('*');
const body=document.querySelector('body');
let timer=5;

themeBtn.addEventListener('click', (evt)=>{
    //reset du timer
    clearTimeout(timer);
    //début de la foction
    timer=setTimeout(()=>{
        if(evt.detail===3){
            rond.forEach((child)=>{
                //Easter egg en cas de triple clique
                body.classList.add('invert');
            });
        }
        else{
            rond.forEach((child)=>{
                //Reset de l'easter egg + check du fill
                body.classList.remove('invert');
                let fillCheck=child.getAttribute('fill');
                //Si "l'ampoule" est allumée alors on passe en thème sombre, sinon en thème clair
                if(fillCheck=='white'){
                    child.setAttribute('fill','none');
                    body.classList.add('darkTheme');
                }
                else{
                    child.setAttribute('fill','white');
                    body.classList.remove('darkTheme');
                }
            });
        }
    }, 5);
});

window.addEventListener('scroll', function(event) {
    if (window.scrollY > 0) {
        navigationBar.classList.add('show');
    }
    else{
    navigationBar.classList.remove('show');
    }
});

//Cimetière du code "qui pourrait servir plus tard"

                /*child.setAttribute('fill','black');
                child.setAttribute('stroke','black');
                body.classList.remove('darkTheme');*/