const fs = require("fs-extra");
const path = require("path");
const pdfParse = require("pdf-parse");

const carpetaPDFs = path.join(__dirname, "reglamentos");
const salidaJSON = path.join(__dirname, "data", "documentos.json");

async function convertirPDFs() {
  const archivos = await fs.readdir(carpetaPDFs);
  const resultados = [];

  for (const archivo of archivos) {
    if (path.extname(archivo).toLowerCase() !== ".pdf") continue;

    const pdfPath = path.join(carpetaPDFs, archivo);
    const buffer = await fs.readFile(pdfPath);

    try {
      const data = await pdfParse(buffer);
      const texto = data.text.trim();

      if (!texto) {
        console.warn(`⚠️ El PDF "${archivo}" no tiene texto legible (posible escaneo).`);
        continue;
      }

      resultados.push({
        id: archivo.replace(".pdf", ""),
        title: archivo.replace(".pdf", "").replace(/_/g, " "),
        content: texto,
        source: "local"
      });

      console.log(`✅ Procesado: ${archivo}`);
    } catch (err) {
      console.warn(`❌ Error leyendo "${archivo}":`, err.message);
    }
  }

  await fs.outputJson(salidaJSON, resultados, { spaces: 2 });
  console.log("📄 Archivo JSON guardado en:", salidaJSON);
}

convertirPDFs().catch(console.error);

