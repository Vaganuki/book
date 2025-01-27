//Element à trigger
const trig=document.getElementById('linkTrig');
//Chargement des audios
const audio=document.querySelectorAll('.linkAudio');

trig.addEventListener('click', ()=>{
    let i=Math.floor(Math.random()*audio.length);
    audio[i].play();
});