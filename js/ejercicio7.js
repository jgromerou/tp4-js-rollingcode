/*
7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
● existeContacto(Contacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/

//Para usar el Menú Agenda hay que cancelar el primer prompt, abrir consola del navegador y refresh a la página.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
  // set
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setTelefono(titulo) {
    this.titulo = titulo;
  }

  //get
  get getNombre() {
    return this.nombre;
  }
  get getTelefono() {
    return this.telefono;
  }
}

class Agenda {
  agenda = [];

  //metodos
  //1- Añadir contacto nuevo a la agenda
  aniadirContacto(contacto) {
    if (this.agenda.find((element) => element.nombre === contacto.nombre)) {
      console.log(
        `Ya existe un contacto con el nombre ${contacto.nombre}. Contacto rechazado`
      );
    } else {
      if (this.agenda.length < 10) {
        this.agenda.push(contacto);
        console.log(`Registrado el contacto con el nombre ${contacto.nombre}`);
      } else {
        console.log(
          `Superaste la cantidad máxima de contactos de la agenda. Contacto rechazado`
        );
      }
    }
  }

  //2- Ver si existe un contacto
  existeContacto(nombre) {
    const contactoBuscado = this.agenda.find((elem) => elem.nombre === nombre);
    if (contactoBuscado) {
      console.log(
        `Si existe el contacto con el nombre ${contactoBuscado.nombre}`
      );
    } else {
      console.log(`No existe el contacto con el nombre ${nombre}`);
    }
  }

  //3- Listar Contactos de la agenda
  listarContactos() {
    if (this.agenda.length === 0) {
      console.log('La agenda está vacía.');
    } else {
      this.agenda.forEach((element) => console.log(element));
    }
  }

  //4- Buscar Contacto en la agenda
  buscarContacto(nombre) {
    const contactoBuscado = this.agenda.find((elem) => elem.nombre === nombre);
    if (contactoBuscado) {
      console.log(
        `Si existe el contacto con el nombre ${contactoBuscado.nombre} y su teléfono es ${contactoBuscado.telefono}`
      );
    } else {
      console.log(`No existe el contacto con el nombre ${nombre}`);
    }
  }

  //5- Eliminar Contacto por el nombre
  eliminarContacto(nombre) {
    if (this.agenda.length === 0) {
      console.log('No hay contactos en la agenda.');
    } else if (this.agenda.find((elem) => elem.nombre === nombre)) {
      this.agenda = this.agenda.filter((element) => element.nombre !== nombre);
      console.log(`El contacto fue elimiado correctamente`);
    } else {
      console.log(`No existe el contacto con el nombre ${nombre} a eliminar`);
    }
  }

  //6- Ver si la agenda esta llena y 7- Ver si hay huecos libres en la Agenda
  verAgendaLlenaYhuecosLibres() {
    if (this.agenda.length === 10) {
      console.log(`La Agenda está llena.`);
    } else {
      console.log(`La Agenda aun tiene huecos libres.`);
    }
  }
}

//inicializar
const agenda = new Agenda();

//MENU
mostrarMenu = () => {
  console.log('\n\t\tMENU AGENDA');
  console.log('\t\t---- ------\n');
  console.log('[1] -- Registrar Contacto');
  console.log('[2] -- Existe Contacto');
  console.log('[3] -- Listar Contacto');
  console.log('[4] -- Buscar Contacto');
  console.log('[5] -- Eliminar Contacto');
  console.log('[6] -- Ver si la Agenda está llena');
  console.log('[7] -- Ver si hay huecos libres en la Agenda');
  console.log('[BOTON CANCELAR] -- TERMINAR PROGRAMA');
};

//Variable
let opcion = '';
let contactoNuevoNombre = '';
let contactoNuevoTelefono = '';
mostrarMenu();
do {
  opcion = prompt('Ingrese una opción del Menú y presione Aceptar:');

  switch (opcion) {
    case '1':
      const contactoNuevoNombre = prompt('Ingresa Nombre del nuevo contacto:');
      const contactoNuevoTelefono = prompt(
        'Ingresa Telefono nuevo del contacto:'
      );
      const nuevoContacto = new Contacto(
        contactoNuevoNombre,
        contactoNuevoTelefono
      );
      agenda.aniadirContacto(nuevoContacto);
      break;
    case '2':
      const contactoExiste = prompt('Ingrese el nombre del contacto a buscar:');
      agenda.existeContacto(contactoExiste);
      break;
    case '3':
      agenda.listarContactos();
      break;
    case '4':
      const contactoBuscar = prompt('Ingrese el nombre del contacto a buscar:');
      agenda.buscarContacto(contactoBuscar);
      break;
    case '5':
      const contactoaEliminar = prompt(
        'Ingrese el nombre del contacto que desea eliminar:'
      );
      agenda.eliminarContacto(contactoaEliminar);
      break;
    case '6':
      agenda.verAgendaLlenaYhuecosLibres();
      break;
    case '7':
      agenda.verAgendaLlenaYhuecosLibres();
      break;

    case null:
      console.log('\n\n\t\tFIN DE PROGRAMA');
      break;
    default:
      console.log('Opción inválida');
  }
} while (opcion != null);
