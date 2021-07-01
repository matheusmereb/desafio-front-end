import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { Estado } from '../estado';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  public cidades: Cidade[] | any = [];
  public estados: Estado[] | any = [];

  public stateInput: string = "";

  constructor(private homeService: HomeService) { }

  //Função que carrega dados de todas as cidades no carregamento
  ngOnInit(): void {
    this.getAllStates();
  }

  /* //Fetch dos dados de todas as cidades
  getAllCities(): void {
    this.cidades = this.homeService.getCities().subscribe(
      (response: Cidade[]) => {
        this.cidades = response;
        console.log(this.cidades);
      }
    );
  } */

  getAllStates(): void {
    this.homeService.getStates().subscribe(
      (response: Estado[]) => {
        this.estados = response;
        console.log(this.estados);
      }
    )
  }

  //Função atividada quando algum estado é escolhido no SelectBox
  optionChanged(input) {
    this.stateInput = input.value;
  }
}
