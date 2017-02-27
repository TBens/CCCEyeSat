import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmPacketsComponent } from './tm-packets/tm-packets.component';

const routes: Routes = [
  { path: '', redirectTo: '/tm-packets', pathMatch: 'full' },
  { path: 'tm-packets', component: TmPacketsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
