function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  const FechaActual = new Date();
  
  return (FechaActual.getFullYear() - fechaNacimiento.getFullYear()) >= 18;
    
  
} 
   console.log(esMayorDeEdad(new Date ("1996-03-22")));
   console.log(esMayorDeEdad(new Date ("2016-03-22")));
   console.log(esMayorDeEdad(new Date ("2008-03-22")));
   console.log(esMayorDeEdad(new Date ("1986-03-22")));
   console.log(esMayorDeEdad(new Date ("brahyam")));





module.exports = esMayorDeEdad;