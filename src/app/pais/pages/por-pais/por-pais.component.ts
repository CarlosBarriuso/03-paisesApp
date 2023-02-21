import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  
})
export class PorPaisComponent {

  termino = 'Holamundo';

  // Inyectamos el servicio para poder usar el servicio
  constructor( private paisService: PaisService) { }

  buscar() {
    console.log(this.termino);
    //para que un Observable se dispare hace falta tener un Suscribe
    this.paisService.buscarPais( this.termino )
    .subscribe( respuesta => {
      console.log(respuesta);
    });

  }  

}
