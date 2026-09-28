const btnAbrir = document.getElementById("btnAbrir");
const abertura = document.getElementById("abertura");

const btnVideo = document.getElementById("btnVideo");
const modalVideo = document.getElementById("modalVideo");

const fecharVideo = document.getElementById("fecharVideo");
const video = document.getElementById("video");


/*
|--------------------------------------------------------------------------
| ABRIR CONVITE
|--------------------------------------------------------------------------
*/

btnAbrir.addEventListener("click", () => {

    abertura.classList.add("esconder");

});


/*
|--------------------------------------------------------------------------
| ABRIR VÍDEO
|--------------------------------------------------------------------------
*/

btnVideo.addEventListener("click", () => {

    modalVideo.classList.add("ativo");

    video.play();

});


/*
|--------------------------------------------------------------------------
| FECHAR VÍDEO
|--------------------------------------------------------------------------
*/

fecharVideo.addEventListener("click", fecharModal);


modalVideo.addEventListener("click", (event) => {

    if (event.target === modalVideo) {
        fecharModal();
    }

});


function fecharModal() {

    modalVideo.classList.remove("ativo");

    video.pause();

    video.currentTime = 0;

}


/*
|--------------------------------------------------------------------------
| ESC
|--------------------------------------------------------------------------
*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        fecharModal();

    }

});
