import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router: Router) { }
  
  gotoHome(): void {
    this.router.navigate(['/home']);
  }

  gotoTmPacket(): void {
    this.router.navigate(['/tm-packet']);
  }
}
