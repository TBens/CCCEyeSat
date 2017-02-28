import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TmPacketComponent } from './tm-packet/tm-packet.component';
import { TmGridComponent } from './tm-packet/tm-grid/tm-grid.component';
import { TmFreeComponent } from './tm-packet/tm-free/tm-free.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TmExplorerSidebar } from './tm-packet/explorer/tm-explorer-sidebar/tm-explorer-sidebar.component';
import { TmExplorerContent } from './tm-packet/explorer/tm-explorer-content/tm-explorer-content.component';
import { TmExplorerContentPacketList } from './tm-packet/explorer/tm-explorer-content/packet-list/packet-list.component';
import { TmExplorerContentPacketExplorer } from './tm-packet/explorer/tm-explorer-content/packet-explorer/packet-explorer.component'

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
    TmExplorerSidebar,
    TmExplorerContent,
    TmExplorerContentPacketList,
    TmExplorerContentPacketExplorer,
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
