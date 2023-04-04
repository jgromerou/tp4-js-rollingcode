/*
Modelando Clases: Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
class Cuenta {
  #titular;
  #saldo;
  constructor(titular, saldo) {
    this.#titular = titular;
    this.#saldo = saldo;
  }

  //set
  set titular(nuevoTitular) {
    if (nuevoTitular > 0) {
      this.#titular = nuevoTitular;
    }
  }
  set saldo(nuevoSaldo) {
    if (nuevoSaldo > 0) {
      this.#saldo = nuevoSaldo;
    }
  }

  //get
  get titular() {
    return this.#titular;
  }
  get saldo() {
    return this.#saldo;
  }

  ingresar(cantidad) {
    this.saldo += cantidad;
    document.write(
      `<p>Se ingresó $${cantidad} a la cuenta del titular:${this.titular}</p>`
    );
  }
  extraer(cantidad) {
    if (this.saldo < cantidad) {
      document.write(
        `<p>La cantidad que quiere extraer es menor al saldo disponible ($${this.saldo})</p>`
      );
    } else {
      this.saldo -= cantidad;
      document.write(
        `<p>Se extrajo $${cantidad} a la cuenta del titular:${this.titular}</p>`
      );
    }
  }
  informar() {
    document.write(
      `<p>Saldo disponible actual del titular ${this.titular} es de $${this.saldo}</p>`
    );
  }
}

//instanciación
const cuentaJose = new Cuenta('José', 7000);

//ejecutar métodos
cuentaJose.informar();
cuentaJose.ingresar(3000);
cuentaJose.informar();
cuentaJose.extraer(5000);
cuentaJose.informar();
cuentaJose.extraer(5000);
cuentaJose.informar();
