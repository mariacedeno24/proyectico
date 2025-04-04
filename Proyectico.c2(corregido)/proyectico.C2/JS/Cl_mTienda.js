
import Cl_mFotografia from './Cl_mFotografia.js'
export default class Cl_mTienda {
  constructor() {
    this.contFotosDigitales = 0
    this.acumSubTotal = 0
    this.montoTotal = 0
  }
  procesarPromocion(p) {
    this.montoTotal += p.precio();
    if (p instanceof Cl_mFotografia && p.tipo === "D") {
      this.contFotosDigitales++;
      this.acumSubTotal += p.precio();
    }
  }
  subTotalFotosDigitales() {
    return this.acumSubTotal
  }
  totalVendido() {
    return this.montoTotal
  }
  contadorDeFotosDigitales() {
    return this.contFotosDigitales
  }
  promedioFotosDigitales() {
    if (this.contFotosDigitales > 0) {
      acumSubTotal / this.contFotosDigitales
    } else return 0
  }
}
/**
 * import Cl_Fotografia from "./Cl_Fotografia.js";

export default class Cl_Tienda {
  constructor() {
    this.contFotosDigitales = 0;
    this.acumSubTotal = 0;
    this.montoTotal = 0;
  }
  procesarPromocion(p) {
    this.montoTotal += p.precio();
    if (p instanceof Cl_Fotografia && p.tipo === "D") {
      this.contFotosDigitales++;
      this.acumSubTotal += p.precio();
    }
  }
  subTotalFotosDigitales() {
    return this.acumSubTotal
  }
  totalVendido() {
    return this.montoTotal
  }
  contadorDeFotosDigitales() {
    return this.contFotosDigitales
  }
  promedioFotosDigitales() {
    if (this.contFotosDigitales > 0) {
      acumSubTotal / this.contFotosDigitales
    } else return 0
  }
}

 */