
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
    //Setar um tempo para cada letra ser adicionada
        setTimeout(() => elemento.innerHTML +=letra, 75 * i)
    });
}

const titulo = document.getElementById('titulo');
typeWriter(titulo);

const body = document.querySelector("body");
const navbar = document.getElementById("nav");
const modoEscuro = document.getElementById('dark');
const modoClaro = document.getElementById('bright');

modoEscuro.addEventListener("click", ()=>{
    body.classList.add("modoEscuro");
    modoClaro.classList.remove("hide");
    modoEscuro.classList.add("hide");
    navbar.classList.remove("navbar-light");
   navbar.classList.add("navbar-dark");
});

modoClaro.addEventListener("click", ()=>{
    body.classList.remove("modoEscuro");
    modoEscuro.classList.remove("hide");
    modoClaro.classList.add("hide");
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
});

const music = document.getElementById('music');
const mute = document.getElementById('mute');
const audio = document.querySelector('audio');
const botoes = document.querySelectorAll('.botoes');
music.addEventListener("click", tocarMusica);
mute.addEventListener("click", pararMusica);

function tocarMusica(){
    music.classList.add("hide");
    mute.classList.remove("hide");
for (botao of botoes){
    botao.addEventListener("click", ()=>{
        audio.play();
    })
}//for
}//tocarMusica

function pararMusica(){
    mute.classList.add("hide");
    music.classList.remove("hide");
    for (botao of botoes){
        botao.addEventListener("click", ()=>{
            audio.pause();
        })
}
}