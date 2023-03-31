import botaoContador from "./botaoContador.js";
import iniTabNav from "./navTabs.js";
import { trocarImagem } from "./trocarImagem.js";

botaoContador();
iniTabNav();

const imagens = document.querySelectorAll('.galeria-alternativo img');
imagens.forEach((img) => {
  img.addEventListener('click', () => {
    trocarImagem(img.dataset.src);
  });
});
