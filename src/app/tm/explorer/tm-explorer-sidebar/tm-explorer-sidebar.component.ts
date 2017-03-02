import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'tm-explorer-sidebar',
  templateUrl: './tm-explorer-sidebar.component.html'
})
export class TmExplorerSidebar implements OnInit {

   constructor(private router: Router) {}

  gotoTmGrid(): void {
    this.router.navigate(['/tm-grid']);
  }

  gotoTmFree(): void {
    this.router.navigate(['/tm-free']);
  }

  ngOnInit() {
  }
}
