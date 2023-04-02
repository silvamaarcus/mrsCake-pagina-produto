export default function zoomImagem() {
  const container = document.querySelector('.galeria-destaque');
  const img = document.querySelector('#principal-img');
  const foco = document.querySelector('.foco');

  container.addEventListener('mouseover', () => {
    if (window.innerWidth >= 800) {
      img.style.transform = 'scale(1.5)';
      foco.style.display = 'block';
    };
  });
  container.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    foco.style.display = 'none';
  });


}