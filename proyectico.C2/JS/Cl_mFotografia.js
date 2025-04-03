import Cl_mPromocion from "./Cl_mPromocion.js";
export default class Cl_mFotografia extends Cl_mPromocion {
    constructor(codigo, costo, tipo) {
        super(codigo, costo);
        this.tipo = tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    descuento() {
        if(this.tipo === "D"){
            return this.precioBase() * 0.18;
        } else return 0;
        }
    incremento() {
        if(this.tipo === "I"){
            return this.precioBase() * 0.13;
        } else return 0;  
    }
}