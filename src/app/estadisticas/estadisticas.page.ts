import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  data: any;
  idPoke: string = '';
  nombrePoke: string = '';
  constructor(
    private route: ActivatedRoute,
    private listado: ListadoService,
    private router: Router
  ) {
    this.idPoke = route.snapshot.paramMap.get('id');
    this.nombrePoke = route.snapshot.paramMap.get('name');

    listado.getData(`https://pokeapi.co/api/v2/pokemon/${this.idPoke}`).subscribe((data: any) => {
        this.data = data;
    });
  }

  ngOnInit() {
  }

  atras() {
    if (this.router.url.includes('estadisticasFav')){
      this.router.navigateByUrl('/tabs/favoritos');
    } else {
      this.router.navigateByUrl('');
    }
  }

}
