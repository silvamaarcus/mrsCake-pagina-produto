import botaoContador from "./botaoContador.js";
import iniTabNav from "./navTabs.js";
import { trocarImagem } from "./trocarImagem.js";
import seletorImagem from "./seletorImagem.js";
import zoomImagem from "./zoomImagem.js";

botaoContador();
iniTabNav();

const imagens = document.querySelectorAll('.galeria-alternativo img');
imagens.forEach((img) => {
  img.addEventListener('click', () => {
    trocarImagem(img.dataset.src);
  });
});

seletorImagem();
zoomImagem();