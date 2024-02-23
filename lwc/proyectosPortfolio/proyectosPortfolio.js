import { LightningElement, track } from 'lwc';

export default class ProyectosPortfolio extends LightningElement {
    
   @track selectedItem = 'proyectouno';
   @track currentContent = 'proyectouno';
   @track proyectouno="Proyecto Uno";
   @track proyectodos="Proyecto Dos";
   
   verProyectoUno= false;
   verProyectoDos= false;
   verProyectoTres= false;
   verProyectoCuatro= false;
   
   handleSelect(event) {
      const opcion = event.detail.name;
      let texto="";
      switch (opcion) {
         case "proyectouno":
            
            this.verProyectoUno= true;
            this.verProyectoDos= false;
            this.verProyectoTres= false;
            this.verProyectoCuatro= false;
            this.verescripcionPortfolio=false;
            break;
         case "proyectodos":
            
            this.verProyectoUno= false;
            this.verProyectoDos= true;
            this.verProyectoTres= false;
            this.verProyectoCuatro= false;
            this.verdescripcion=false;
            break;
         case "proyectotres":
            
            this.verProyectoUno= false;
            this.verProyectoDos= false;
            this.verProyectoTres= true;
            this.verProyectoCuatro= false;
            this.verdescripciono=false;
            break;
         case "proyectocuatro":
            
            this.verProyectoUno= false;
            this.verProyectoDos= false;
            this.verProyectoTres= false;
            this.verProyectoCuatro= true;
            this.verdescripcion=false;
            break;

         case "descripcion":
            this.verProyectoUno= false;
            this.verProyectoDos= false;
            this.verProyectoTres= false;
            this.verProyectoCuatro= false;
            this.verdescripcion=true;
            break;
         case "githubListaTarea":
            window.open('https://github.com/OAODesarrollador/ListaTareaSalesforce.git');
            break;
         default:
            break;
      }      


      this.currentContent = texto;
   }; 
      
}
      
      
            
