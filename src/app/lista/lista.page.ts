import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  pokemons: any;
  private offset: number = 0;
  private limit: number = 20;
  constructor(
    private listado: ListadoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listado.getData(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`).subscribe((data: any) => {
      this.pokemons = data;
    });
  }

  loadData(infiniteScroll){
    this.offset += this.limit;
    this.listado.getData(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`).subscribe((data: any) => {
      this.pokemons.results = this.pokemons.results.concat(data.results);
      infiniteScroll.target.complete();
    });
  }

  navega(i, poke){
    this.router.navigateByUrl(`/tabs/estadisticas/${i + 1}/${poke.name}`);
  }

  favorite(poke, i){

  }
}
