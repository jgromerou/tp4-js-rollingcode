/*
Ejercicios adicionales
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".
*/
class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  saludar() {
    document.write(`<p>${this.nombre}: ¡Hola!</p>`);
  }
  despedirse() {
    document.write(`<p>${this.nombre}: ¡Hasta luego!</p>`);
  }
}

const jose = new Persona('Jose', 25, 'Programador Full Stack');
const juan = new Persona('Juan', 25, 'Programador Testing QA');

jose.saludar();
juan.despedirse();
