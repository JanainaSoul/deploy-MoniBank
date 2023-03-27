const botaoIniciarCamera = document.querySelector("[data-video-botao]"); // linha 64
const campoCamera = document.querySelector("[data-camera]"); // linha 66
const video = document.querySelector("[data-video]"); // linha 67
const botaoTirarFoto = document.querySelector("[data-tirar-foto]"); // linha 68
const canvas = document.querySelector("[data-video-canvas]"); // linha 72
const mensagem = document.querySelector("[data-mensagem]"); //linha 71
const botaoEnviarFoto = document.querySelector("[data-enviar]"); //linha 77

let imagemURL = " "; // inicializa vazia e na linha 25 ela vai ser transformada

//função que qdo clique no botão video ele inicialisar a camera
botaoIniciarCamera.addEventListener('click', async function (){ //escutador de evento qdo clica no rostinho
    const iniciarVideo = await navigator.mediaDevices // pede pro navegador aceitar a camera
    .getUserMedia({video: true, audio: false}) // somente video sem audio

    botaoIniciarCamera.style.display = "none"; //pro botao desaparecer depois de clicado
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
});

// captura da foto data-tirar-foto

botaoTirarFoto.addEventListener("click", function(){ // escutador p quando clica no botão
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); // posicionament0 0 0 e o tamanho q ja era padrao

    imagemURL = canvas.toDataURL("image/jpeg"); // vai transformar em url para ser salva depois

    campoCamera.style.display = "none"; //aparece a foto
    mensagem.style.display = "block"; // aparece a mensagem
});

//enviando a foto
botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = './abrir-conta-form-3.html';
})