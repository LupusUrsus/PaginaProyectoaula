function togglePDF(id) {
    var pdf = document.getElementById(id);
    if (pdf.style.display === "none" || pdf.style.display === "") {
        pdf.style.display = "block";
    } else {
        pdf.style.display = "none";
    }
}