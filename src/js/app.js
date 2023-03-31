import botaoContador from "./botaoContador.js";
import iniTabNav from "./navTabs.js";
import { trocarImagem } from "./trocarImagem.js";
import seletorImagem from "./seletorImagem.js";

botaoContador();
iniTabNav();

const imagens = document.querySelectorAll('.galeria-alternativo img');
imagens.forEach((img) => {
  img.addEventListener('click', () => {
    trocarImagem(img.dataset.src);
  });
});

seletorImagem();