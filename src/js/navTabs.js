export default function iniTabNav() {
  const tabMenu = document.querySelectorAll('.galeria-alternativo img');
  const tabConteudo = document.querySelectorAll('.principal-conteudo section');

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add('ativo');

    function ativarTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabConteudo[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        ativarTab(index);
      });
    });
  }
}