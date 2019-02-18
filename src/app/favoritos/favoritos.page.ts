import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favs: any [] = [];
  constructor(
    private listado: ListadoService,
    private router: Router
  ) { 
    this.favs = this.listado.getFav();
  }

  ngOnInit() {
  }

  navega(poke) {
    this.router.navigateByUrl(`/tabs/estadisticasFav/${poke.id}/${poke.name}`);
  }
}
