import { SpacePacket } from '../model/spacepacket'
import { TmPacketsService } from '../tm-packets.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tm-packets',
  templateUrl: './tm-packets.component.html',
  styleUrls: ['./tm-packets.component.css']
})
export class TmPacketsComponent implements OnInit {
  tmpackets: SpacePacket[];
  selectedPacket: SpacePacket;

  constructor(private router: Router, private tmPacketsService: TmPacketsService) { }

  ngOnInit() {
    this.getTmPackets();
  }

  onSelect(packet: SpacePacket): void {
    this.selectedPacket = packet;
  }

  getTmPackets(): void {
    this.tmPacketsService.getTmPackets().then(tmpackets => this.tmpackets = tmpackets);
  }

  gotoPacketDetail(): void {
    this.router.navigate(['/detail', this.selectedPacket.name]);
  }

}
