/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }
  imprimeDatos() {
    document.write('<h2>Datos del Producto:</h2>');
    document.write('<ul>');
    document.write(`<li>Código: ${this.codigo}</li>`);
    document.write(`<li>Nombre: ${this.nombre}</li>`);
    document.write(`<li>Precio: ${this.precio}</li>`);
    document.write(`</ul>`);
  }
}

//instanciarlo
const mouseGenius = new Producto(133341, 'Mouse Genius DX-100', 3000);
const tecladoGenius = new Producto(342342, 'Teclado Genius K639', 5000);

//ejecutar métodos
mouseGenius.imprimeDatos();
tecladoGenius.imprimeDatos();
