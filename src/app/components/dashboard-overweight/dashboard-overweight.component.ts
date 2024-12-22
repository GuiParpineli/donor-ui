import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-overweight',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard-overweight.component.html',
  styleUrls: ['./dashboard-overweight.component.css'],
})
export class DashboardOverweightComponent implements OnInit {
  public chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Percentual de Obesos',
        data: [],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'], // Cores personalizadas para homens e mulheres
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
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

  private apiUrl = 'http://localhost:8080/public/api/donor/overweight';

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
    const labels = data.map((entry) => entry.sexo);
    const percentages = data.map((entry) =>
      parseFloat(entry.porcent.replace('%', ''))
    );

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'Percentual de Obesos',
          data: percentages,
          backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'], // Azul para Masculino, Vermelho para Feminino
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        },
      ],
    };

    console.log('Dados processados para o gráfico:', this.chartData);
  }
}
