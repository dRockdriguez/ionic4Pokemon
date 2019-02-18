import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lista',
        children: [
          {
            path: '',
            loadChildren: '../lista/lista.module#ListaPageModule'
          }
        ]
      },
      {
        path: 'favoritos',
        children: [
          {
            path: '',
            loadChildren: '../favoritos/favoritos.module#FavoritosPageModule'
          }
        ]
      },
      {
        path: 'estadisticas',
        children: [
          {
            path: '',
            loadChildren: '../estadisticas/estadisticas.module#EstadisticasPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
