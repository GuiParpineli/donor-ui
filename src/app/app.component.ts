import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet></router-outlet>`, // Exibe as rotas configuradas (login ou main)
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet
  ]
})
export class AppComponent {
}
