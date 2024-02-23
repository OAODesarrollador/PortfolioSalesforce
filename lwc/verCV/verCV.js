import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/CV';

export default class VerCV extends LightningElement {
    CV = imagen + "/CVOscarAOrtiz.pdf";
    
    vista(event){
        window.open('https://drive.google.com/file/d/1ZWoglz5g0Bw8L0amH9kuxguRwfyZxGi0/view?usp=sharing');
    }
    
}