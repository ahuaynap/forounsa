import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.doughnutChartLabels = ['CS', 'FSI', 'SO'];
    this.getTop();
  }

  getTop() {
    this.dataService.getTop().subscribe(res => {
      console.log(res);
    });
  }

}
