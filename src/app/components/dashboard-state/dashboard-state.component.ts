import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
import {ENDPOINTS} from '../../utils/Endpoints';

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

  private apiUrl = ENDPOINTS.ALL;

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
        console.log(response);
      },
    });
  }

  private processData(data: any[]): void {
    const stateCounts: Record<string, number> = {};

    data.forEach((entry) => {
      const {state} = entry;
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
          backgroundColor: '#ed6161',
          borderColor: '#b11d1d',
          borderWidth: 1,
        },
      ],
    };
  }
}
