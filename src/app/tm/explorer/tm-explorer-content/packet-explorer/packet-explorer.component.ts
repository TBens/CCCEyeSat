import { Component, DoCheck } from '@angular/core';
import { SpacePacket } from '../../../../model/spacepacket';
import { TmPacketsService } from '../../../../tm-packets.service';
import { AbstractContainer } from '../../../../model/spacepacket';
import { TreeModule } from 'angular2-tree-component';
import { isParameter } from '../../../../model/spacepacket';

@Component({
  selector: 'tm-explorer-content-packet-explorer',
  templateUrl: './packet-explorer.component.html'
})
export class TmExplorerContentPacketExplorer implements DoCheck{
  
  previousPacket: SpacePacket;
  
  selectedPacket: SpacePacket;  

  
    nodes = [];
  
  constructor(private tmPacketsService: TmPacketsService) { }
  
    ngDoCheck() {
      this.selectedPacket = this.tmPacketsService.getTmPacket();
    if(this.selectedPacket !== this.previousPacket)
    {
      this.nodes = [];
      this.previousPacket = this.selectedPacket;
    }
    
    if(this.selectedPacket){
      
      this.nodes.push({name: this.selectedPacket.name, children: this.spacePacketAdapter(this.selectedPacket.rootContainer.subContainers)});
      
    }
  
  }
  

  
  
  spacePacketAdapter(tmpPck: Array<AbstractContainer>) {
      var tmpTab = []
      
      for(var i =0; i < tmpPck.length; i ++)
      {
        if(!isParameter(tmpPck[i]))
        {
          
          tmpTab.push({ name: tmpPck[i].name, children: this.spacePacketAdapter(tmpPck[i].subContainers) });
          
        }
        if (isParameter(tmpPck[i]))   
        {
            tmpTab.push({name: tmpPck[i].name});
        }
      }
      
      return tmpTab;
      
  }
  
}