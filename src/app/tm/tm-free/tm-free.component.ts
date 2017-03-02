import { Component, OnInit } from '@angular/core';
import {ElementRef, ViewChild} from '@angular/core';
import '../../../js/lobipanel.min.js';

@Component({
  selector: 'app-tm-free',
  templateUrl: './tm-free.component.html',
  styleUrls: ['./tm-free.component.css']
})
export class TmFreeComponent implements OnInit {

  @ViewChild('panelTest') el;
  
  

  constructor(private elRef:ElementRef) { }
 
  ngOnInit() {
  
  }
  
  
  
  ngAfterViewInit() {    
      this.el.lobiPanel({
            sortable: true,
            reload: false,
            unpin: false,
            minimize: false,
            state: "unpinned"
        });
        
       //var instance = $('.free-0').data('lobiPanel');
        //instance.unpin();
        //instance.setSize(300, 150);
        //instance.setPosition(480, 150);
        
        /*var instance = $('.free-1').data('lobiPanel');
        //instance.unpin();
        instance.setSize(300, 150);
        instance.setPosition(1300, 170);
        
        var instance = $('.free-2').data('lobiPanel');
        //instance.unpin();
        instance.setSize(300, 150);
        instance.setPosition(1425, 570);
        
        var instance = $('.free-3').data('lobiPanel');
        //instance.unpin();
        instance.setSize(300, 150);
        instance.setPosition(625, 740);
        console.log(instance.getPosition());
        console.log("toto");*/

  }
}
