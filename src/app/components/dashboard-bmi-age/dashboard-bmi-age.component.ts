import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
import {ENDPOINTS} from '../../utils/Endpoints';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-bmi-age',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard-bmi-age.component.html',
  styleUrls: ['./dashboard-bmi-age.component.css'],
})
export class DashboardBmiAgeComponent implements OnInit {
  public chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'IMC Médio por Faixa Etária',
        data: [],
        backgroundColor: '#ed6161',
        borderColor: '#b11d1d',
        borderWidth: 1,
      },
    ],
  };

  public chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  private apiUrl = ENDPOINTS.BMI_BY_AGE;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      {
        next: (response) => {
          this.processData(response);
        },
      });
  }

  private processData(data: any[]): void {
    const labels = data.map((entry) => entry.ageRange);
    const averageImcs = data.map((entry) => entry.averageImc);

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'IMC Médio por Faixa Etária',
          data: averageImcs,
          backgroundColor: '#ed6161',
          borderColor: '#b11d1d',
          borderWidth: 1,
        },
      ],
    };
  }
}
