function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

/*   // Opcion 1 
  var Saludo = "Hola ";
  return Saludo + nombre; */
  // Opcion 2 
  return "Hola " + nombre + "!";
  
}

module.exports = obtenerSaludo;