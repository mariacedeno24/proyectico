export default class Cl_vVideo{
    constructor(){
        this.inCodigo = document.getElementById("videoForm_inCodigo");
        this.inCosto = document.getElementById("videoForm_inCosto");
        this.inHDSI = document.getElementById("videoForm_inHDSI");
        this.inHDNO = document.getElementById("videoForm_inHDNO");
        this.btProcesar = document.getElementById("videoForm_btProcesar");
    }
    get codigo(){
        return this.inCodigo.value;
    }
    get costo(){
        return +this.inCosto.value;
    }
    get HD(){
        if (this.inHDSI.checked === true){
            return this.inHDSI.value;
        }
        if (this.inHDNO.checked === true){
            return this.inHDNO.value;
        }
    }
}