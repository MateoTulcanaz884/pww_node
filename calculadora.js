function procesarLista() {
    var input = document.getElementById("lista").value;
    var resultado = document.getElementById("resultado");
    if (input.trim() === "") {
        resultado.innerHTML = "Ingrese números separados por coma";
        return;
    }
    var lista = input
        .split(",")
        .map(function (n) { return Number(n.trim()); })
        .filter(function (n) { return !isNaN(n); });
    var multiplicacion = 1;
    var salida = "";
    lista.forEach(function (n) {
        multiplicacion *= n;
        salida += "N\u00FAmero: ".concat(n, " \u2192 ").concat(esPrimo(n), "<br>");
    });
    salida += "<br><strong>Multiplicaci\u00F3n:</strong> ".concat(multiplicacion);
    resultado.innerHTML = salida;
}
function esPrimo(n) {
    if (n <= 1)
        return "No es primo";
    if (n === 2)
        return "Es primo";
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return "No es primo";
    }
    return "Es primo";
}
