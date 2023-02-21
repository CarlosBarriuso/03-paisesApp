import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {

  termino: string = 'Holamundo';
  hayError: boolean = false;

  // Inyectamos el servicio para poder usar el servicio
  constructor( private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    
    //para que un Observable se dispare hace falta tener un Suscribe
    this.paisService.buscarPais( this.termino )
    //como 2º valor subcribe puede recibir el error y lo vamos a rescatar
    .subscribe( respuesta => {
      
      console.log(respuesta);
    }, (err) => {
      this.hayError = true;
    });

  }  

}
