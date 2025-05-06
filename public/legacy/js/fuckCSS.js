//BOUTON
const btn=document.getElementById('fuckCSS');
//Les balises liens
const css=document.getElementById('offCSS');
const norm=document.getElementById('offNORM');
//INTERRUPTEUR
let off=false;
//Fonctionnalité au click
btn.addEventListener('click', ()=>{
    //Check de l'état de l'interrupteur
    if(off){
        //Si vrai rallume le css
        css.setAttribute('href','./css/style.css');
        norm.setAttribute('href','./css/normalize.css');
        //On adapte le texte du bouton
        btn.innerText='Bouton à désactiver le CSS (stp non)';
        //Inversion du bouton
        off=!off;
    }
    else{
        //Si faux on éteint
        css.removeAttribute('href');
        norm.removeAttribute('href');
        //On adapte le texte du bouton
        btn.innerText='RALLUME LE CSS !!!!!!! (stp)';
        //Inversion de l'interrupteur
        off=!off;
    }
});


/*

░█░█░█▀█░█▀█░█▀█░█▀▀░▀█▀░█▀▀░█▄█░█▀▀░█▀█░▀█▀░░░░▀▀█░█▀▀░░░█▀▀░█▀█░▀█▀░█▀▀░░░█▀█░█▀█░█▀▀
░█▀█░█░█░█░█░█░█░█▀▀░░█░░█▀▀░█░█░█▀▀░█░█░░█░░░░░░░█░█▀▀░░░▀▀█░█▀█░░█░░▀▀█░░░█▀▀░█▀█░▀▀█
░▀░▀░▀▀▀░▀░▀░▀░▀░▀▀▀░░▀░░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░▄▀░░▀▀░░▀▀▀░░░▀▀▀░▀░▀░▀▀▀░▀▀▀░░░▀░░░▀░▀░▀▀▀
░█▀█░█▀█░█░█░█▀▄░▄▀▄░█░█░█▀█░▀█▀░░░▀▀█░▀░█▀█░▀█▀░░░█▀▀░█▀█░▀█▀░▀█▀░░░█▀▀░█▀█░░░         
░█▀▀░█░█░█░█░█▀▄░█\█░█░█░█░█░░█░░░░░░█░░░█▀█░░█░░░░█▀▀░█▀█░░█░░░█░░░░█░░░█▀█░░░         
░▀░░░▀▀▀░▀▀▀░▀░▀░░▀\░▀▀▀░▀▀▀░▀▀▀░░░▀▀░░░░▀░▀░▀▀▀░░░▀░░░▀░▀░▀▀▀░░▀░░░░▀▀▀░▀░▀░▀░         
░█▄█░█▀█░▀█▀░█▀▀░░░█▀▀░▀░█▀▀░█▀▀░▀█▀░░░█▀▀░█░█░█▄█░█▀█░█▀█                              
░█░█░█▀█░░█░░▀▀█░░░█░░░░░█▀▀░▀▀█░░█░░░░▀▀█░░█░░█░█░█▀▀░█▀█                              
░▀░▀░▀░▀░▀▀▀░▀▀▀░░░▀▀▀░░░▀▀▀░▀▀▀░░▀░░░░▀▀▀░░▀░░▀░▀░▀░░░▀░▀                              

*/