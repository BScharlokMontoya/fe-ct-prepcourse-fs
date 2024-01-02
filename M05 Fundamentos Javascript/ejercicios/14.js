function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  return str1.length == str2.length;
}
console.log(tienenMismaLongitud("hola" , "manu"));
console.log(tienenMismaLongitud("jose" , "señora"));
console.log(tienenMismaLongitud("hola" , "maiz"));
console.log(tienenMismaLongitud("hola" , "otro"));



module.exports = tienenMismaLongitud;