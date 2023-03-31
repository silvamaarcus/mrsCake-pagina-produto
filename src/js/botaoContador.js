export default function botaoContador() {
  const botoesQtd = document.querySelectorAll('.qtd-btn');

  botoesQtd.forEach((botao) => {
    botao.addEventListener('click', mudarNumero);
  });

  function mudarNumero() {
    // Setando o valor original do input.
    const input = this.parentNode.querySelector('.qtd-input');
    let inputValor = parseInt(input.value);

    //Aumentando ou diminuindo contador.
    if (this.classList.contains('mais')) {
      inputValor++;
    } else if (this.classList.contains('menos')) {
      inputValor = inputValor > 0 ? inputValor - 1 : 0;
    }
    // Setando novo valor do input.
    input.value = inputValor;
  }
}

