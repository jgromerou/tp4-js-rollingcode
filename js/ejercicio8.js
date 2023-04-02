/*
Ejercicios adicionales
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".
*/
class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }

  // set
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }

  set edad(nuevaEdad) {
    if (nuevaEdad.length > 0) {
      this.#edad = nuevaEdad;
    }
  }

  set profesion(nuevaProfesion) {
    if (nuevaProfesion.length > 0) {
      this.#profesion = nuevaProfesion;
    }
  }
  //get
  get nombre() {
    return this.#nombre;
  }
  get edad() {
    return this.#edad;
  }

  get profesion() {
    return this.#profesion;
  }

  saludar() {
    document.write(`<p>${this.nombre}: ¡Hola!</p>`);
  }
  despedirse() {
    document.write(`<p>${this.nombre}: ¡Hasta luego!</p>`);
  }
}

const jose = new Persona('Jose', 25, 'Programador Desarrollo Full Stack');
const juan = new Persona('Juan', 25, 'Programador Testing QA');

jose.saludar();
juan.despedirse();
