import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/logos';

export default class Portfolio extends LightningElement {
    trialhead = imagen + "/trialhead.png";
    github = imagen + "/GithubRedondo.png";
    linkedin = imagen + "/linkedin.png";
    geo = imagen + "/ubicacion.png";
    email = imagen + "/correo.png";
    whatsapp = imagen + "/telefono.png";
}