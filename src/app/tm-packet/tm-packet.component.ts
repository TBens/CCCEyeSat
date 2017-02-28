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

  constructor(private tmPacketsService: TmPacketsService) { }


  ngOnInit() {
    this.getTmPackets();
  }
  getTmPackets(): void {
    this.tmPacketsService.getTmPackets().then(tmpackets => this.tmpackets = tmpackets);
  }

}
