function procesarLista(): void {
    const input = (document.getElementById("lista") as HTMLInputElement).value;
    const resultado = document.getElementById("resultado") as HTMLElement;

    if (input.trim() === "") {
        resultado.innerHTML = "Ingrese números separados por coma";
        return;
    }

    const lista: number[] = input
        .split(",")
        .map(n => Number(n.trim()))
        .filter(n => !isNaN(n));

    let multiplicacion: number = 1;
    let salida: string = "";

    lista.forEach(n => {
        multiplicacion *= n;
        salida += `Número: ${n} → ${esPrimo(n)}<br>`;
    });

    salida += `<br><strong>Multiplicación:</strong> ${multiplicacion}`;
    resultado.innerHTML = salida;
}

function esPrimo(n: number): string {
    if (n <= 1) return "No es primo";
    if (n === 2) return "Es primo";

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "No es primo";
    }
    return "Es primo";
}
