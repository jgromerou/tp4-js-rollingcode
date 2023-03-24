/*
10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar
un avión y usar el método abordar.
*/
class Aeropuerto {
  constructor(nombre, listaAviones) {
    this.nombre = nombre;
    this.listaAviones = listaAviones;
  }

  agregarAvion(avion) {
    if (this.listaAviones.find((element) => element.nombre === avion.nombre)) {
      document.write(
        `<p>Ya existe un avion con el nombre ${avion.nombre}. Avion rechazado</p>`
      );
    } else {
      this.listaAviones.push(avion);
      document.write(
        `<p>Registrado el avion con el nombre ${avion.nombre}</p>`
      );
    }
  }

  buscarAvion(nombre) {
    const avionEncontrado = this.listaAviones.find(
      (elem) => elem.nombre === nombre
    );
    if (avionEncontrado) {
      document.write(
        `<p>Si existe el avion con el nombre ${avionEncontrado.nombre} y su lista de pasajeros es ${avionEncontrado.listaPasajeros}</p>`
      );
    } else {
      document.write(`<p>No existe el avion con el nombre ${nombre}</p>`);
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = listaPasajeros;
  }

  abordar(nombre) {
    if (this.listaPasajeros.length <= this.capacidad) {
      document.write(`Puede abordar el pasajero ${nombre}.`);
    } else {
      document.write(
        `Está lleno el avión, el pasajero ${nombre} no puede subir`
      );
    }
  }
}

const aeropuertoInter = new Aeropuerto('Aeropuerto Internacional', []);

const avion1 = new Avion('Boeing 747', 300, 'Madrid,España', [
  'Cristian',
  'Mercedes',
  'Raul',
]);

const avion2 = new Avion('MD-80', 220, 'Paris,Francia', [
  'Nicolas',
  'Federico',
]);

const avion3 = new Avion('AirbusA380', 2, 'Lisboa,Portugal', [
  'Belen',
  'Tomas',
  'Tadeo',
]);

document.write('<h2>Agregar los 3 aviones al Aeropuerto</h2>');
aeropuertoInter.agregarAvion(avion1);
aeropuertoInter.agregarAvion(avion2);
aeropuertoInter.agregarAvion(avion3);
document.write('<hr>');

console.log(aeropuertoInter.listaAviones);

document.write('<h3>Buscar Aviones por su nombre:</h3>');
aeropuertoInter.buscarAvion('Boeing 747');
aeropuertoInter.buscarAvion('Boeing B-52');
document.write('<hr>');

document.write('<h4>Abordo de un nuevo pasajero al avión 3:</h4>');
avion3.abordar('Juan');

document.write('<h4>Abordo de un nuevo pasajero al avión 1:</h4>');
avion1.abordar('Fabian');
