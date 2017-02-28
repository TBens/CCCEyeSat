import { Component, OnInit } from '@angular/core';
import { SpacePacket } from '../model/spacepacket';
import { TmPacketsService } from '../tm-packets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tm-packet',
  templateUrl: './tm-packet.component.html',
  styleUrls: ['./tm-packet.component.css']
})
export class TmPacketComponent implements OnInit {
  tmpackets: SpacePacket[];
  selectedPacket: SpacePacket;
  
    constructor(private router: Router, private tmPacketsService: TmPacketsService) { }

  onSelect(packet: SpacePacket): void {
    this.selectedPacket = packet;
  }

  getTmPackets(): void {
    this.tmPacketsService.getTmPackets().then(tmpackets => this.tmpackets = tmpackets);
  }

  ngOnInit() {
    this.getTmPackets();
  }

}
