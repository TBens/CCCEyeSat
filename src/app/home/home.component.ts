import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  gotoHome(): void {
    this.router.navigate(['/home']);
  }

  gotoTmPacket(): void {
    this.router.navigate(['/tm-packet']);
  }

  gotoTmGrid(): void {
    this.router.navigate(['/tm-grid']);
  }

  gotoTmFree(): void {
    this.router.navigate(['/tm-free']);
  }

  ngOnInit() {
  }

}
