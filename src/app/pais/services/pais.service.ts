import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";   // https://restcountries.com/v3.1
  
  get getParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }
  
  constructor( private http: HttpClient) { }

  //Obserbable sirve para ver los cambios en el URL
  //Para poner el tipado correcto al Obserbable
  buscarPais( termino: string ): Observable<Country[]> { 

    const url = ` ${ this.apiUrl }/name/${ termino }`;
    //como get puede devolver cualquier cosa le ponemos el tipado correcto
    return this.http.get<Country[]>( url, { params: this.getParams } );
  }

  buscarCapital ( termino: string ): Observable<Country[]> {

    const url = ` ${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.getParams } );
  }

  obtenerPaisPorCodigo ( id: string ): Observable<Country> {

    const url = ` ${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]>{
    const apiUrll = 'https://restcountries.com/v2/all'
    
    const paramsHttp = new HttpParams()
      .set('fields', '?fields=name,capital,flag,alpha2code');
    const url = ` ${ this.apiUrl }/region/${ region }`;
    //como get puede devolver cualquier cosa le ponemos el tipado correcto
    return this.http.get<Country[]>( url, { params: this.getParams }  );
  }
}
