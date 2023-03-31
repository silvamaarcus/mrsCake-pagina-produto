export default function seletorImagem() {
  const imagens = document.querySelectorAll('.galeria-alternativo img');

  let ultimaFotoSelecionada = null;

  imagens.forEach((img) => {
    img.addEventListener('click', () => {
      if (ultimaFotoSelecionada !== null) {
        ultimaFotoSelecionada.style.border = "";        
      }
      img.style.border = '2px solid #551b0f';
      ultimaFotoSelecionada = img;
    });
  });
}