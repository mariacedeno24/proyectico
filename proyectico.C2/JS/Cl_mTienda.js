import Cl_mFotografia from "./Cl_mFotografia.js";
export default class Cl_mTienda {
    constructor() {
      this.contFotosDigitales = 0;
      this.acumSubTotal = 0;
      this.montoTotal = 0;  
    }
    procesarPromocion(p){
        this.montoTotal += this.precio();
        if ( p instanceof Cl_mFotografia && this.contFotosDigitales.tipo === "D") {
             this.montoTotal += p.precio();
            this.contFotosDigitales++;
            this.acumSubTotal += this.precio();
        }
        } 
    subTotalFotosDigitales(){
            return this.acumSubTotal;
        }   
    totalVendido(){
        return this.montoTotal;
    }
    contadorDeFotosDigitales(){
        return this.contFotosDigitales;
    }
    promedioFotosDigitales(){
        if(this.contFotosDigitales > 0){
            acumSubTotal / this.contFotosDigitales;
        } else return 0;
    }
    
}
