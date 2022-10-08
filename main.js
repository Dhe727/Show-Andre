import { core } from './Core.js';
window.addEventListener("load", () => {
    const audioTema = new Audio("tema-show.mp3");
    const primeirPergunta = new Audio("comecar.mp3");
    const iniciaAudio = document.querySelector("body");
    let liberaTema = true;
    iniciaAudio.addEventListener("click",()=> {
        if(liberaTema == true){
            liberaTema = false;
            audioTema.play();
            audioTema.loop = true;
        }
    });
    
    
    function login() {
        const telaLogin = document.querySelector("#app");
        telaLogin.innerHTML = `<div class="logoMarca">Show do Andre</div>
        <div class="areaLogin">
        <input id="usuario" type="text" placeholder="digite seu nome do jogador">
        <button id="salvar">Salvar</button>
    </div>
        
        </div>`;
        const salvar = document.querySelector("#salvar");
        salvar.addEventListener("click", () => {
            let usuario = document.querySelector("#usuario").value;
            if (usuario != "") {
                localStorage.setItem("usuario", usuario);
                core(usuario);
                audioTema.pause();
                audioTema.currentTime = 0;
                primeirPergunta.play();
            } else {
                alert("O nome de usuario não pode estar vazio!");
            }
        });

    }
    login();
    
})