import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  constructor(private router: Router) { }
  
    gotoHome(): void {
    this.router.navigate(['/home']);
  }

  gotoTmPacket(): void {
    this.router.navigate(['/tm-packet']);
  }
}
