class Libro {
  constructor(isbn, titulo, autor, nroPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPaginas = nroPaginas;
  }
  // set
  set setIsbn(isbn) {
    this.isbn = isbn;
  }
  set setTiulo(titulo) {
    this.titulo = titulo;
  }
  set setAutor(autor) {
    this.autor = autor;
  }
  set setNroPaginas(nroPaginas) {
    this.nroPaginas = nroPaginas;
  }

  //get
  get getIsbn() {
    return this.isbn;
  }
  get getTiulo() {
    return this.titulo;
  }
  get getAutor() {
    return this.autor;
  }
  get getNroPaginas() {
    return this.nroPaginas;
  }

  mostrarLibro() {
    document.write(
      `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPaginas} páginas</p>`
    );
  }
}

//función
function compararNropaginasDosLibros(l1, l2) {
  if (l1.getNroPaginas > l2.getNroPaginas) {
    return document.write(
      `<p>${l1.getTiulo} tiene más números de páginas que ${l2.getTiulo}</p>`
    );
  } else if (l1.getNroPaginas < l2.getNroPaginas) {
    return document.write(
      `<p>${l2.getTiulo} tiene más números de páginas que ${l1.getTiulo}</p>`
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
