/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área.
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  calcularPerimetro() {
    let resultado = 0;
    resultado = 2 * (this.alto + this.ancho);
    document.write(
      `<p>El perímetro del Rectángulo de lados ${this.alto} y ${this.ancho} es igual a ${resultado}</p>`
    );
  }
  calcularArea() {
    let resultado = 0;
    resultado = this.alto * this.ancho;
    document.write(
      `<p>El área del Rectángulo de lados ${this.alto} y ${this.ancho} es igual a ${resultado}</p>`
    );
  }
}

//instanciarlo
const rectangulo1 = new Rectangulo(4, 2);
const rectangulo2 = new Rectangulo(5, 10);

//ejecutar métodos
document.write('<h3>Rectágulo 1:</h3>');
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();
document.write('<h3>Rectágulo 2:</h3>');
rectangulo2.calcularPerimetro();
rectangulo2.calcularArea();
