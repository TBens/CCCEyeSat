import { SpacePacket } from './model/spacepacket';
import { Injectable } from '@angular/core';
import { PACKETS } from './mock-tm-packets';

@Injectable()
export class TmPacketsService {

  constructor() { }

  getTmPackets(): Promise<SpacePacket[]> {
    return Promise.resolve(PACKETS);
  }

}
