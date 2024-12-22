import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-avg-year',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard-avg-year.component.html',
  styleUrls: ['./dashboard-avg-year.component.css'],
})
export class DashboardAvgYearComponent implements OnInit {
  public chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Média de Idade por Tipo Sanguíneo',
        data: [],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
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

  private apiUrl = 'http://localhost:8080/public/api/donor/yearAverage';

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
    const labels = data.map((entry) => entry.bloodType);
    const averages = data.map((entry) => entry.averageYear);

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'Média de Idade por Tipo Sanguíneo',
          data: averages,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
      ],
    };

    console.log('Dados processados para o gráfico:', this.chartData);
  }
}
