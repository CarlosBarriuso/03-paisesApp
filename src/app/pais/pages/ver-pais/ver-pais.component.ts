import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

//tap es un operador que dispara un efecto secundario

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
 
})
export class VerPaisComponent implements OnInit {

  //Para que admita un valor null para el pais es Country, se añade !
  pais!: Country;

  bandera = '';

  //para poder suscribirnos a los cambios del URL inyectamos
  constructor( 
    private cambiosUrl: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.cambiosUrl.params
      //obtenemos otro Obserbable 
      .pipe(
        switchMap( (params) => this.paisService.obtenerPaisPorCodigo( params.id) ),
        //tap recibe el Obserbable y lo imprime
        tap( console.log )
        
      )
      .subscribe( pais => 
        //console.log(`valor del pais recibido: ${pais[0].flag}`,pais);
        this.pais =  (pais)
        //this.bandera = this.pais.flag;
        //console.log('Pais: ' + (Object.keys(pais[0])))
      );
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
