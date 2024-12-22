import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {InputDataComponent} from './components/input-data/input-data.component';
import {DashboardStateComponent} from './components/dashboard-state/dashboard-state.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InputDataComponent, DashboardStateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'donor-ui';
}
