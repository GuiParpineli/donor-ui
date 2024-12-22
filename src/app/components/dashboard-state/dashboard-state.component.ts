import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-state',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard-state.component.html',
  styleUrls: ['./dashboard-state.component.css'],
})
export class DashboardStateComponent implements OnInit {
  public chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Quantidade de Pessoas por Estado',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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

  private apiUrl = 'http://localhost:8080/public/api/donor/all';

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
    const stateCounts: Record<string, number> = {};

    data.forEach((entry) => {
      const { state } = entry;

      if (!stateCounts[state]) {
        stateCounts[state] = 0;
      }

      stateCounts[state] += 1;
    });


    this.chartData = {
      labels: Object.keys(stateCounts),
      datasets: [
        {
          label: 'Quantidade de Pessoas por Estado',
          data: Object.values(stateCounts),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    console.log('Dados processados para o gráfico:', this.chartData);
  }
}
