document.getElementById("tipo-seguro").addEventListener("change", function() {
    const tipoSeguro = this.value;
    let valor = 0;

    if (tipoSeguro === "Basico") {
        valor = 500;
    } else if (tipoSeguro === "Intermedio") {
        valor = 1000;
    } else if (tipoSeguro === "Premium") {
        valor = 1500;
    } else {
        valor = 0;
    }

    document.getElementById("valor-seguro").textContent = `Valor del seguro: $${valor}`;
});
