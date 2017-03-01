
import { Component, OnInit } from '@angular/core';
import { SpacePacket } from '../../../../model/spacepacket';
import { TmPacketsService } from '../../../../tm-packets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tm-explorer-content-packet-list',
  templateUrl: './packet-list.component.html'
})
export class TmExplorerContentPacketList  implements OnInit{
  tmpackets: SpacePacket[];
  selectedPacket: SpacePacket;  
  constructor(private router: Router, private tmPacketsService: TmPacketsService) { }

  onSelect(packet: SpacePacket): void {
    this.selectedPacket = packet;
    this.tmPacketsService.setTmPacket(this.selectedPacket);
  }

  getTmPackets(): void {
    this.tmPacketsService.getTmPackets().then(tmpackets => this.tmpackets = tmpackets);
  }

  ngOnInit() {
    this.getTmPackets();
  }
}