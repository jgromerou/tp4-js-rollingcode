class Libro {
  #isbn;
  #titulo;
  #autor;
  #nroPaginas;
  constructor(isbn, titulo, autor, nroPaginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#nroPaginas = nroPaginas;
  }
  // set
  set isbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }
  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  set nroPaginas(nuevoNroPaginas) {
    this.#nroPaginas = nuevoNroPaginas;
  }

  //get
  get isbn() {
    return this.#isbn;
  }
  get titulo() {
    return this.#titulo;
  }
  get autor() {
    return this.#autor;
  }
  get nroPaginas() {
    return this.#nroPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas</p>`
    );
  }
}

//función
function compararNropaginasDosLibros(l1, l2) {
  if (l1.nroPaginas > l2.nroPaginas) {
    return document.write(
      `<p>${l1.titulo} tiene más números de páginas que ${l2.titulo}</p>`
    );
  } else if (l1.nroPaginas < l2.nroPaginas) {
    return document.write(
      `<p>${l2.titulo} tiene más números de páginas que ${l1.titulo}</p>`
    );
  } else {
    return document.write(
      `<p>Ambos libros tiene el mismo número de páginas</p>`
    );
  }
}

//inicializar
const elPrincipito = new Libro(
  '9789876848039',
  'El Principito',
  'Saint-Exupéry',
  128
);

const plateroyYo = new Libro(
  '9788466751865',
  'Platero y Yo',
  'Juan Ramón Jiménez',
  161
);

//ejecutar funciones
elPrincipito.mostrarLibro();
plateroyYo.mostrarLibro();

document.write(
  '<h3>Comparación de quien tiene más número de páginas entre los 2 libros: </h3>'
);

compararNropaginasDosLibros(elPrincipito, plateroyYo);
