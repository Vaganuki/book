const conteneur=document.getElementById('anim');
const letAnimTab=document.querySelectorAll('.letAnim');

conteneur.addEventListener('mouseenter', ()=>{
    //Création d'un RGB aléatoire
    let r=Math.random()*256|0;
    let g=Math.random()*256|0;
    let b=Math.random()*256|0;

    //Réduction de la taille du conteneur
    conteneur.classList.add('scale');

    letAnimTab.forEach((letA,i)=>{
        setTimeout(()=>{
            //Retrait préventif du reset
            letA.classList.remove('reset');
            //Début de l'animation (Scaling, déformation, ajout de la couleur);
            letA.classList.add('animat');
            letA.style.color = `rgb(${r},${g},${b})`;
            setTimeout(()=>{
                letA.classList.remove('animat');
                letA.classList.add('reset');
                letA.style.color = ``;
            }, 200);
        },50*i);
    });
});
conteneur.addEventListener('mouseleave', ()=>{
    conteneur.classList.remove('scale');
});