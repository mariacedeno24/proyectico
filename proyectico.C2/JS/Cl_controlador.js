export default class Cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarFotografia(){
        this.modelo.procesarPromocion(this.vista.agregarFotografia());
        this.vista.reportarFotografia(
        this.modelo.totalVendido().toFixed(2),
        this.modelo.contadorDeFotosDigitales(),
        this.modelo.subTotalFotosDigitales().toFixed(2),
        this.modelo.promedioFotosDigitales().toFixed(2)
    )
    }
    procesarVideo(){
        this.modelo.procesarPromocion(this.vista. agregarVideo());
        this.vista.reportarVideo(
            this.modelo.totalVendido().toFixed(2),
            this.modelo.contadorDeFotosDigitales(),
            this.modelo.subTotalFotosDigitales().toFixed(2),
            this.modelo.promedioFotosDigitales().toFixed(2)
    )
    }
}