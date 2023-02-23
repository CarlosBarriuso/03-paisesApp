import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {


  termino: string = 'Holamundo';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

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
    this.termino = $event;
    this.mostrarSugerencias = true;
    // TODO: crear sugerencias
    this.paisService.buscarPais( $event )
      .subscribe( paises => this.paisesSugeridos = paises.slice(0, 3),
      (err) => this.paisesSugeridos = [] 
      );
    }
  
  buscarSugerido (termino: string) {

    this.buscar( termino );
    //this.mostrarSugerencias = false;
  }
}
