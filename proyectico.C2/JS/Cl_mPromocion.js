export default class Cl_mPromocion {
    constructor(codigo,costo) {
        this.codigo = codigo;
        this.costo = costo;
    }
    set costo(costo){
        this._costo = costo;
    }

    get codigo(){
        return this._codigo;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    get costo(){
        return this._costo;
    }
    precioBase(){
        return this.costo;
    }
    precio(){
        return this.costo + this.incremento() - this.descuento();
    }
}