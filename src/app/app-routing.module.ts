import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TmPacketComponent } from './tm/tm-packet.component';
import { TmFreeComponent } from './tm/tm-free/tm-free.component';
import { TmGridComponent } from './tm/tm-grid/tm-grid.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',       redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'home',     component: HomeComponent },
  { path: 'tm-packet', component: TmPacketComponent },
  { path: 'tm-free', component: TmFreeComponent },
  { path: 'tm-grid', component: TmGridComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
