/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  emitirSonido() {
    document.write(`<p>El animal emite su sonido.</p>`);
  }
}

class Perro extends Animal {
  emitirSonido() {
    document.write(`<p>¡Gua Guaaa!</p>`);
  }
}
class Gato extends Animal {
  emitirSonido() {
    document.write(`<p>¡Miiiaaaauuuu!</p>`);
  }
}

const firulai = new Perro('firulai', 5);
const nefer = new Gato('nefer', 4);

firulai.emitirSonido();
nefer.emitirSonido();
