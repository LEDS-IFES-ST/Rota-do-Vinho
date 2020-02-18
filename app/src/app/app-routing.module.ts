import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/exemplo',
    pathMatch: 'full'
  },
  {
    path: 'exemplo',
    component: ExemploComponent
  },
  {
    path: 'fotos',
    component: CarrosselComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
