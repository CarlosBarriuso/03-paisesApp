import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1";
  
  constructor( private http: HttpClient) { }

  //Para poner el tipado correcto al Obserbable
  buscarPais( termino: string ): Observable<Country[]> { 

    const url = ` ${ this.apiUrl }/name/${ termino }`;
    //como get puede devolver cualquier cosa le ponemos el tipado correcto
    return this.http.get<Country[]>( url );
  }

  buscarCapital ( termino: string ): Observable<Country[]> {

    const url = ` ${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }
}
