import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/paginas';

export default class PaginaPortfolio extends LightningElement {
    paginasobremi = imagen + '/paginasobremi.png';
    paginaeducacion = imagen + '/paginaeducacion.png';
    paginaproyecto = imagen + '/paginaproyecto.png';
    paginacontacto = imagen + '/paginacontacto.png';
}