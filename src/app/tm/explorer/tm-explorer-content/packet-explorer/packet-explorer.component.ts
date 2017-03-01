import { Component, DoCheck } from '@angular/core';
import { SpacePacket } from '../../../../model/spacepacket';
import { TmPacketsService } from '../../../../tm-packets.service';

@Component({
  selector: 'tm-explorer-content-packet-explorer',
  templateUrl: './packet-explorer.component.html'
})
export class TmExplorerContentPacketExplorer implements DoCheck{
  
  selectedPacket: SpacePacket;
   
  constructor(private tmPacketsService: TmPacketsService) { }
  
    ngDoCheck() {
      this.selectedPacket = this.tmPacketsService.getTmPacket();
  }
  
  
  
}