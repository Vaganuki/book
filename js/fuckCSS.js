const btn=document.getElementById('fuckCSS');
const css=document.getElementById('offCSS');
const norm=document.getElementById('offNORM');
let off=false;

btn.addEventListener('click', ()=>{
    if(off){
        css.setAttribute('href','./css/style.css');
        norm.setAttribute('href','./css/normalize.css');
        btn.innerText='Bouton à désactiver le CSS (stp non)';
        off=false;
    }
    else{
        css.removeAttribute('href');
        norm.removeAttribute('href');
        btn.innerText='RALLUME LE CSS !!!!!!! (stp)';
        off=true;
    }
});