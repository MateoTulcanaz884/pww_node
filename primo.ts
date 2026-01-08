
let numeros: number[] =[4,7,8,9];
let multiplicacion: number =1;

numeros.forEach((valor) => {
  multiplicacion *= valor;
});

let primos: number[] = [];
let noPrimos: number[] = [];


function esPrimos(n: number) {
    if (n <= 1) {
        return false;
    }
    const limite = Math.sqrt(n);
    for (let i = 2; i <= limite; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
numeros.forEach((valor) => {
  if (esPrimos(valor)) {
    primos.push(valor);
  } else {
    noPrimos.push(valor);
  }
});

// Mostrar resultados
console.log("La multiplicacion de la lista:", multiplicacion);
console.log("Números primos:", primos);
console.log("Números no primos:", noPrimos);
