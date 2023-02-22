import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  
})
export class PorCapitalComponent implements OnInit {

  valorBusqueda: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  // Inyectamos el servicio para poder usar el servicio
  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar (valorBusqueda: string ) {
    
    this.hayError = false;
    this.valorBusqueda = valorBusqueda;
    
    this.paisService.buscarCapital( valorBusqueda )
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
    console.log(`Valor de capital en buscarCapital: ${valorBusqueda}`);
  }

  

}
