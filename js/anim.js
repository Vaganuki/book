const conteneur=document.getElementById('anim');
const letAnimTab=document.querySelectorAll('.letAnim');
conteneur.addEventListener("mouseenter", function(){
    let r=Math.random()*256|0;
    let g=Math.random()*256|0;
    let b=Math.random()*256|0;
    console.log
    conteneur.classList.add('scale');
    letAnimTab.forEach((letA,i)=>{
        setTimeout(()=>{
            letA.classList.remove('reset');
            letA.classList.add('animat');
            letA.style.color = `rgb(${r},${g},${b})`
            setTimeout(()=>{
                letA.classList.remove('animat');
                letA.classList.add('reset');
                letA.style.color = `rgb(0,0,0)`
            }, 200);
        },50*i);
    });
});
conteneur.addEventListener("mouseleave", function(){
    conteneur.classList.remove('scale');
});