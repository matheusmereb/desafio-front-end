import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from '../cidade';
import { Estado } from '../estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  //JSONs and APIs sources
  private statesUrl: string = '/assets/Estados.json';
  private weatherUrl: string = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/';
  private citiesUrl: string = 'http://apiadvisor.climatempo.com.br/api/v1/locale/city?country=BR&token=e7502af646a18c43286e113c433c75f9'
  private capitalsUrl: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
  private token: string = 'e7502af646a18c43286e113c433c75f9'

  constructor(private http: HttpClient) {}

  /* // GET das Siglas dos estados para o JSON de Estados (SelectBox)
  getSigla(): any {
    let siglas: any = [] ;
    let state: [] | any =  this.http.get<Estado[]>(this.statesUrl);
    state.forEach((e: { Sigla: string; }) => siglas = siglas.concat(e.Sigla));
    return siglas;
  } */

  // GET dos estados pro JSON de estados
  getStates(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.statesUrl);
  }

  /* // GET para o nome de todos as cidades
  getCities(): Observable<Cidade[]> {
    console.log('penes');
    return this.http.get<Cidade[]>(this.citiesUrl);
  }

  // GET dados do clima em cima do ID da cidade
  getWeather(id: string): any {
    return this.http.get<any>(`${this.weatherUrl}${id}/current?token=${this.token}`);    
  } */

  /* // GET pra API do IBGE que filtra as cidades pelo estado
  getCitiesByState(estado: string): any {
    return this.http.get<any>(`${this.capitalsUrl}${estado}/municipios`)
  } */
}
