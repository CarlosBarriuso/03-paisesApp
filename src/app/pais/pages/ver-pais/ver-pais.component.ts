import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
 
})
export class VerPaisComponent implements OnInit {

  //para poder suscribirnos a los cambios del URL inyectamos
  constructor( 
    private cambiosUrl: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.cambiosUrl.params
      //obtenemos otro Obserbable 
      .pipe(
        switchMap( (param) => this.paisService.obtenerPaisPorCodigo( param.id) )
      )
      .subscribe( resp => {

      })
    /*
    this.cambiosUrl.params
    .subscribe( params => {
      console.log(`Valores que recibimos de params: ${params.id}`);

      this.paisService.obtenerPaisPorCodigo ( params.id )
        .subscribe( pais => {
          console.log(`Valor de país recibido: ${pais.population}`);
        })
    });
    */
    // tambien se podría usar la desestructuración de params:
    //.subscribe( ({ id })=>{ console.log(id);  });

    //Opcion2 
  }

}
