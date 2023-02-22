import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  
})
export class PaisInputComponent implements OnInit {
 // Para emitir el termino y lo pueda usar pais-input.component
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';
  constructor() { }

  ngOnInit(): void {
    //se dispara solo 1 vez cuando el componente esta creado e inicializado
    this.debouncer
    .pipe( //deja de emitir valor los siguientes 300 milisegundos. Pausa
      debounceTime(300)
    )
    .subscribe( valor => {
      console.log('debouncer: '+ valor);
      this.onDebounce.emit( valor );
    })
  }

  buscar(){
    console.log('Valor de termino en buscar' + this.termino);
    //cuando se presiona enter se emite para que lo pueda usar 
    this.onEnter.emit ( this.termino );
  }

  // Opción para recoger el valor cuando presionamos una tecla
  //para ello hay que pasar e evento en el input del html
  /*
  teclaPresionada ( event:any ) {
    const valor = event.target.value;
    console.log(`Valor en teclaPresionada: ${valor}`);

    console.log(`Valor de termino en teclaPresionada: ${this.termino}`);
  }
  */
  teclaPresionada () {

    //llamamos al debouncer para emitir el valor, con next mandamos
    // el siguiente valor, en este caso es termino. Porque debouncer esta suscritro
    // y recibe el valor
    this.debouncer.next( this.termino);
  }

  
  }
}
