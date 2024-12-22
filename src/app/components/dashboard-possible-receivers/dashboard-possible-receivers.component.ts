import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-possible-receivers',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard-possible-receivers.component.html',
  styleUrls: ['./dashboard-possible-receivers.component.css'],
})
export class DashboardPossibleReceiversComponent implements OnInit {
  public chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Quantidade de Receptores por Tipo Sanguíneo',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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

  private apiUrl = 'http://localhost:8080/public/api/donor/blood-types/compatibility';

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
    // Processa os dados recebidos para o gráfico
    const bloodTypes = data.map((entry) => entry.bloodType);
    const recipientCounts = data.map((entry) => entry.totalRecipient);

    this.chartData = {
      labels: bloodTypes,
      datasets: [
        {
          label: 'Quantidade de Receptores por Tipo Sanguíneo',
          data: recipientCounts,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    console.log('Dados processados para o gráfico:', this.chartData);
  }
}
