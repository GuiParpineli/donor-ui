import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
import {ENDPOINTS} from '../../utils/Endpoints';

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

  private apiUrl = ENDPOINTS.BLOOD_TYPES_COMPATIBILITY;

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
    const bloodTypes = data.map((entry) => entry.bloodType);
    const recipientCounts = data.map((entry) => entry.totalRecipient);

    this.chartData = {
      labels: bloodTypes,
      datasets: [
        {
          label: 'Quantidade de Receptores por Tipo Sanguíneo',
          data: recipientCounts,
          backgroundColor: '#ed6161',
          borderColor: '#b11d1d',
          borderWidth: 1,
        },
      ],
    };
  }
}
