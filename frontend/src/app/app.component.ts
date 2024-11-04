import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  goBack(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/dishes') {
      console.log('Já está na página inicial');
      return;
    }
    window.history.back();
  }

  canGoBack(): boolean {
    return this.router.url !== '/dishes';
  }
}