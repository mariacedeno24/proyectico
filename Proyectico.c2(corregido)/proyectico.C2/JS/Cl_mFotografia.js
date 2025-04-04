import Cl_mPromocion from "./Cl_mPromocion.js";
export default class Cl_mFotografia extends Cl_mPromocion {
  constructor({codigo, costo, tipo}) {
    super({codigo, costo});
    this.tipo = tipo;
  }
  set tipo(tipo) {
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
  incremento() {
    if (this._tipo === "I") {
      return this.precioBase() * 0.13;
    } else return 0;
  }
  descuento() {
    if (this._tipo === "D") {
      return this.precioBase() * 0.18;
    } else return 0;
  }
  precio() {
    if (this._tipo === "D") {
      return this.precioBase- this.descuento();
    } else if (this.tipo === "I") {
      return this.precioBase + this.incremento();
    } else return 0;
  }
}