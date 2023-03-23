/*Crear Objetos*/
/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/
let auto = {
  color: 'Gris',
  marca: 'Chevrolet',
  modelo: 'Meriva',
  encender: function () {
    document.write(
      `<p>El auto marca:${this.marca}, modelo:${this.modelo} se encendió</p>`
    );
  },
  apagar: function () {
    document.write(
      `<p>El auto marca:${this.marca}, modelo:${this.modelo} se apagó</p>`
    );
  },
};

//Mostrar el Objeto
document.write('<h2>Auto:</h2>');
document.write('<ul>');
document.write(`<li>Marca: ${auto.marca}</li>`);
document.write(`<li>Modelo: ${auto.modelo}</li>`);
document.write(`<li>Color: ${auto.color}</li>`);
document.write('</ul>');

//Usar los métodos
auto.encender();
auto.apagar();
