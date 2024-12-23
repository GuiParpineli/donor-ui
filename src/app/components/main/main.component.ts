import {Component} from '@angular/core';
import {
  DashboardPossibleReceiversComponent
} from '../dashboard-possible-receivers/dashboard-possible-receivers.component';
import {NgForOf, NgIf} from '@angular/common';
import {DashboardAvgYearComponent} from '../dashboard-avg-year/dashboard-avg-year.component';
import {DashboardOverweightComponent} from '../dashboard-overweight/dashboard-overweight.component';
import {DashboardBmiAgeComponent} from '../dashboard-bmi-age/dashboard-bmi-age.component';
import {DashboardStateComponent} from '../dashboard-state/dashboard-state.component';
import {InputDataComponent} from '../input-data/input-data.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [
    DashboardPossibleReceiversComponent,
    NgIf,
    DashboardAvgYearComponent,
    DashboardOverweightComponent,
    DashboardBmiAgeComponent,
    DashboardStateComponent,
    InputDataComponent,
    HeaderComponent,
    NgForOf
  ]
})
export class MainComponent {
  buttons = [
    'Exibir Doadores por estado',
    'Exibir Faixa etária de doadores',
    'Exibir Percentual obesos',
    'Exibir Média Idade por tipo sanguíneo',
    'Exibir Total possíveis doadores por tipo',
  ];
  activeDashboard: number | null = null;

  showDashboard(dashboardNumber: number): void {
    this.activeDashboard = dashboardNumber;
  }
}
