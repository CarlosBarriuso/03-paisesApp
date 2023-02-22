import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {


  termino: string = 'Holamundo';
  hayError: boolean = false;
  paises: Country[] = [];

  // Inyectamos el servicio para poder usar el servicio
  constructor( private paisService: PaisService) { }

  buscar(terminoABuscar: string ) {
    
    this.hayError = false;
    this.termino = terminoABuscar;
    
    
    //para que un Observable se dispare hace falta tener un Suscribe
    this.paisService.buscarPais( this.termino )
    //como 2º valor subcribe puede recibir el error y lo vamos a rescatar
    .subscribe( respuesta => {
      this.paises = respuesta;
      console.log(respuesta);
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }  

  sugerencias($event: string) {
    this.hayError = false;
    // TODO: crear sugerencias
    }

}
