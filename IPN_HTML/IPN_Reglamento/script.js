document.getElementById('buscador').addEventListener('input', function () {
  const filtro = this.value.toLowerCase();
  const reglamentos = document.querySelectorAll('.reglamento');

  reglamentos.forEach((reglamento) => {
    const texto = reglamento.textContent.toLowerCase();
    reglamento.style.display = texto.includes(filtro) ? 'block' : 'none';
  });
});
