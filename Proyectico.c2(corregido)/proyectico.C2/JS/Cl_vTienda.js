import Cl_mFotografia from './Cl_mFotografia.js'
import Cl_vFotografia from './Cl_vFotografia.js'
import Cl_mVideo from './Cl_mVideo.js'
import Cl_vVideo from './Cl_vVideo.js'
export default class Cl_vTienda {
  constructor() {
    this.controlador = null
    this.mFotografia = null
    this.mvideo = null
    this.tablaFotografia = document.getElementById('IndexForm_tablaFotografia')
    this.tablaVideo = document.getElementById('IndexForm_tablaVideo')
    this.lbltotalVendido = document.getElementById('IndexForm_lbltotalVendido')
    this.lblcontFotosDigitales = document.getElementById(
      'IndexForm_lblcontFotosDigitales'
    )
    this.lblsubTotalFotosDigitales = document.getElementById(
      'IndexForm_lblsubTotalFotosDigitales'
    )
    this.lblpromedioFotosDigitales = document.getElementById(
      'IndexForm_lblpromedioFotosDigitales'
    )
    this.vFotografia = new Cl_vFotografia()
    this.vVideo = new Cl_vVideo()
    this.vFotografia.btProcesar.onclick = () =>
      this.controlador.procesarFotografia()
    this.vVideo.btProcesar.onclick = () =>
      this.controlador.procesarVideo()
  }
  agregarFotografia() {
    this.mFotografia = new Cl_mFotografia({
      codigo: this.vFotografia.codigo,
      Costo: this.vFotografia.costo,
      tipo: this.vFotografia.tipo,
    })
    return this.mFotografia
  }
  agregarVideo() {
    this.mvideo = new Cl_mVideo({
      codigo: this.vVideo.codigo,
      Costo: this.vVideo.costo,
      HD: this.vVideo.HD,
    })
    return this.mvideo
  }
  reportarFotografia(
    totalVendido,
    contadorDeFotosDigitales,
    subTotalFotosDigitales,
    promedioFotosDigitales
  ) {
    this.tablaFotografia.innerHTML += `<tr>
            <td>${this.mFotografia.codigo}</td>
            <td>${this.mFotografia.costo}</td>
            <td>${this.mFotografia.tipo}</td>
            <td>${this.mFotografia.descuento().toFixed(2)}</td>
            <td>${this.mFotografia.incremento().toFixed(2)}</td>
            <td>${this.mFotografia.precio().toFixed(2)}</td>
           </tr>`;
    this.lbltotalVendido.innerHTML = totalVendido;
    this.lblcontFotosDigitales.innerHTML = contadorDeFotosDigitales;
    this.lblsubTotalFotosDigitales = subTotalFotosDigitales;
    this.lblpromedioFotosDigitales = promedioFotosDigitales;
    promocionForm.hidden = true;
    promocionForm.hidden = false;
  }
  reportarVideo(
    totalVendido,
    contadorDeFotosDigitales,
    subTotalFotosDigitales,
    promedioFotosDigitales
  ) {
    this.tablaVideo.innerHTML += `<tr>
            <td>${this.mvideo.codigo}</td>
            <td>${this.mvideo.costo.toFixed(2)}</td>
            <td>${this.mvideo.HD}</td>
            <td>${this.mvideo.incremento().toFixed(2)}</td>
            <td>${this.mvideo.precio().toFixed(2)}</td>
           </tr>`;

    this.lbltotalVendido.innerHTML = totalVendido;
    this.lblcontFotosDigitales.innerHTML = contadorDeFotosDigitales;
    this.lblsubTotalFotosDigitales = subTotalFotosDigitales;
    this.lblpromedioFotosDigitales = promedioFotosDigitales;
    VideoForm.hidden = true;
    VideoForm.hiddenn = false;
  }
}
