function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(numero);
 /*  if (numero % 1 === 0) {
    return true;
    
  } else {
 return false
   } */
 //return numero % 1 === 0;
}

console.log(esNumeroEntero(5));
console.log(esNumeroEntero(18));
console.log(esNumeroEntero(2.1));

module.exports = esNumeroEntero;