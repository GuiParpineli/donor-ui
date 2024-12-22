import { Component } from '@angular/core';
import {DashboardStateComponent} from './components/dashboard-state/dashboard-state.component';
import {
  DashboardPossibleReceiversComponent
} from './components/dashboard-possible-receivers/dashboard-possible-receivers.component';
import {NgForOf, NgIf} from '@angular/common';
import {InputDataComponent} from './components/input-data/input-data.component';
import {HeaderComponent} from './components/header/header.component';
import {DashboardOverweightComponent} from './components/dashboard-overweight/dashboard-overweight.component';
import {DashboardAvgYearComponent} from './components/dashboard-avg-year/dashboard-avg-year.component';
import {DashboardBmiAgeComponent} from './components/dashboard-bmi-age/dashboard-bmi-age.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    DashboardStateComponent,
    DashboardPossibleReceiversComponent,
    NgIf,
    InputDataComponent,
    HeaderComponent,
    NgForOf,
    DashboardOverweightComponent,
    DashboardAvgYearComponent,
    DashboardBmiAgeComponent
  ]
})
export class AppComponent {
  title = 'donor-ui';

  buttons = [
    'Exibir Doadores por estado',
    'Exibir Faixa etária de doadores',
    'Exibir Percentual obesos',
    'Exibir Média Idade por tipo sanguíneo',
    'Exibir Total possíveis doadores por tipo',
  ];

  activeDashboard: number | null = null;

  showDashboard(index: number) {
    this.activeDashboard = index;
  }
}
