import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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

  private apiUrl = 'http://localhost:8080/public/api/donor/imcByAge';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (response) => {
        this.processData(response);
      },
      error: (error) => {
        console.error('Erro ao carregar os dados:', error);
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
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    console.log('Dados processados para o gráfico:', this.chartData);
  }
}
