export default function zoomImagem() {
  const container = document.querySelector('.galeria-destaque');
  const img = document.querySelector('#principal-img');
  const foco = document.querySelector('.foco');

  let tamanhoTela = window.innerWidth;

  container.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.5)';
    foco.style.display = 'block';
  });
  container.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    foco.style.display = 'none';
  });

  // if (tamanhoTela < 800) {
  //   container.addEventListener('mouseover', () => {
  //     img.style.transform = 'none';
  //     foco.style.display = 'none';
  //   });
  // }
}