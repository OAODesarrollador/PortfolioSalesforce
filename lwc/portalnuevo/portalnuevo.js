import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/PortfolioImagenes';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Portalnuevo extends LightningElement {
    astro =imagen + '/oso.png';
    renderedCallback(){
        const cursor = this.template.querySelector('.cursor');
        this.lupainversa( cursor);
        const info = new ShowToastEvent({
            title: "Gracias por la visita",
            message: "Quiero informarle que esta página no es responsive. Estamos trabajando en ello. La vista debe hacerse desde una PC. Gracias",
            variant: "warning",
            mode: 'Sticky'
           });
        this.dispatchEvent(info);
        
    }
    
    lupainversa( cursor) {
               
        const editCursor = e => {
              const { clientX: x, clientY: y } = e;
              cursor.style.left = x + 'px';
              cursor.style.top = y + 'px';
              
        };
        
        window.addEventListener('mousemove', editCursor);
  
  };  
    
}