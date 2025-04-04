import Cl_mPromocion from "./Cl_mPromocion.js";
export default class Cl_mVideo extends Cl_mPromocion {
    constructor({codigo, costo, HD}){
        super({codigo, costo});
        this.HD = HD;
    }
    set HD(HD) {
        this._HD = HD;
      }
      get HD() {
        return this._HD;
      }
      incremento() {
        if (this.HD === "SI") {
          return this.precioBase() * 0.2;
        } else return 0;
      }
      precio() {
        if (this.HD === "SI") {
          return this.precioBase+this.incremento();
        } else return this.precioBase();
      }
    }
    