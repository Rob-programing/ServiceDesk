import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnalistaChamadosComponent } from './components/analista-chamados/analista-chamados.component';
import { AnalistaIncidentesComponent } from './components/analista-incidentes/analista-incidentes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'incidentes', component: AnalistaIncidentesComponent },
  { path: 'solicitacoes', component: AnalistaChamadosComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
