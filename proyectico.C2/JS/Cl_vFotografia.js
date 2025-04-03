export default class Cl_vFotografia{
    constructor(){
        this.inCodigo = document.getElementById("fotografiaForm_inCodigo");
        this.inCosto = document.getElementById("fotografiaForm_inCosto");
        this.inTipoI = document.getElementById("fotografiaForm_inTipoI");
        this.inTipoD = document.getElementById("fotografiaForm_inTipoD");
        this.btProcesar =document.getElementById("fotografiaForm_btProcesar");
    }
    get codigo(){
        return this.inCodigo.valuealue;
    }
    get Costo(){
        return +this.inCosto.value;
    }
    get tipo(){
        if (this.inTipoI.checked === true){
            return this.inTipoI.value;
        }
        if(this.inTipoD.checked === true){
            return this.inTipoD.value;
        }
    }
}