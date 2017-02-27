import { SpacePacket } from '../model/spacepacket';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-packet-detail',
  templateUrl: './packet-detail.component.html',
  styleUrls: ['./packet-detail.component.css']
})
export class PacketDetailComponent implements OnInit {

  @Input()
  spacePacket: SpacePacket;

  constructor() { }

  ngOnInit() {
  }

}
