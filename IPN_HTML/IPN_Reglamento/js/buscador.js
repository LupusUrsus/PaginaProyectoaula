let idx;
let documentos = [];

fetch("data/documentos.json")
  .then(res => res.json())
  .then(data => {
    documentos = data;

    idx = lunr(function () {
      this.ref("id");
      this.field("title");
      this.field("content");

      documentos.forEach(doc => this.add(doc));
    });

    console.log("🔎 Índice creado con Lunr.js");
  });

function buscar() {
  const query = document.getElementById("buscador").value.trim();

  if (!query || !idx) return;

  const resultados = idx.search(query);
  const salida = document.getElementById("resultados");
  salida.innerHTML = "";

  if (resultados.length === 0) {
    salida.innerHTML = "<p>⚠️ No se encontraron resultados.</p>";
    return;
  }

  resultados.forEach(r => {
    const doc = documentos.find(d => d.id === r.ref);
    const snippet = doc.content.substring(0, 300).replace(/\n/g, " ") + "...";

    salida.innerHTML += `
      <div class="resultado">
        <h3>${doc.title}</h3>
        <p>${snippet}</p>
        <small>Fuente: ${doc.source}</small>
      </div>
    `;
  });
}
