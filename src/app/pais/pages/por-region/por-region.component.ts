import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent implements OnInit {


  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
/*
EU (European Union)
EFTA (European Free Trade Association)
CARICOM (Caribbean Community)
PA (Pacific Alliance)
AU (African Union)
USAN (Union of South American Nations)
EEU (Eurasian Economic Union)
AL (Arab League)
ASEAN (Association of Southeast Asian Nations)
CAIS (Central American Integration System)
CEFTA (Central European Free Trade Agreement)
NAFTA (North American Free Trade Agreement)
SAARC (South Asian Association for Regional Cooperation)
*/ 

  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ){ }

  activarRegion ( region:string ){

    //Para evitar que se recarge el componente si  está seleccionado
    if( region === this.regionActiva ) { return; }
    
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer la llamada al servicio
    this.paisService.buscarRegion( this.regionActiva )
    .subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
    //  this.hayError = true;
      this.paises = [];
    });
  }

  getClaseCss( region: string ): string {
    return ( region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary' ;
    
  }

  ngOnInit(): void {
  }

}
