export default class Cl_mPromocion {
    constructor({codigo, costo}) {
      this.codigo = codigo;
      this.costo = costo;
    }
    set costo(costo) {
      this._costo = costo;
    }
    get costo() {
      return +this._costo;
    }
    set codigo(codigo) {
      this._codigo = codigo;
    }
    get codigo() {
      return this._codigo;
    }
    precioBase() {
      return this.costo;
    }
  }
  