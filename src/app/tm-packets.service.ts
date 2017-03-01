import { SpacePacket } from './model/spacepacket';
import { Injectable } from '@angular/core';
import { PACKETS } from './mock-tm-packets';

@Injectable()
export class TmPacketsService {

  spacePacket: SpacePacket;

  constructor() { }

  getTmPackets(): Promise<SpacePacket[]> {
    return Promise.resolve(PACKETS);
  }

  setTmPacket(pck: SpacePacket): void {
    this.spacePacket = pck;
  }

  getTmPacket(): SpacePacket {
    return this.spacePacket;
  }

}
