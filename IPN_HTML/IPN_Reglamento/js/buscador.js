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
  });

function buscar() {
  const query = document.getElementById("buscador").value.trim();
  const salida = document.getElementById("resultados");
  salida.innerHTML = "";

  if (!query || !idx) return;

  const resultados = idx.search(query);

  if (resultados.length === 0) {
    salida.innerHTML = "<p>⚠️ No se encontraron resultados.</p>";
    return;
  }

  resultados.forEach(r => {
    const doc = documentos.find(d => d.id === r.ref);

    // Encuentra la posición del término en el texto
    const posicion = doc.content.toLowerCase().indexOf(query.toLowerCase());

    let snippet = "";
    if (posicion >= 0) {
      const inicio = Math.max(posicion - 50, 0);
      const fin = Math.min(posicion + 150, doc.content.length);
      snippet = doc.content.substring(inicio, fin).replace(/\n/g, " ");
    } else {
      snippet = doc.content.substring(0, 200).replace(/\n/g, " ");
    }

    // Resaltar todas las apariciones de la palabra buscada
    const snippetResaltado = snippet.replace(
      new RegExp(query, "gi"),
      match => `<mark>${match}</mark>`
    );

    salida.innerHTML += `
      <div class="resultado">
        <h3>${doc.title}</h3>
        <p>${snippetResaltado}...</p>
        <button onclick="verPDF('${doc.source}')">📄 Ver documento PDF</button>
      </div>
    `;
  });
}

function verPDF(ruta) {
  const visor = document.getElementById("visor");
  visor.src = ruta;
}
