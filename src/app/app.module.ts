import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TmPacketComponent } from './tm-packet/tm-packet.component';
import { TmGridComponent } from './tm-grid/tm-grid.component';
import { TmFreeComponent } from './tm-free/tm-free.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TmExplorerSidebar } from './tm-explorer-sidebar/tm-explorer-sidebar.component';

import { TmPacketsService } from './tm-packets.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TmPacketComponent,
    TmGridComponent,
    TmFreeComponent,
    TmExplorerSidebar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TmPacketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
