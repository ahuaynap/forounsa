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

  doughnutChartLabels: Label[] = ['', '', '', '', '', '', '', '', '', ''];
  doughnutChartData: MultiDataSet = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTop();
  }

  getTop() {
    this.dataService.getTop().subscribe(res => {
      let i = 0;

      /*
      let resSort = Object.keys(res).sort((a, b) => { return res[b] - res[a] });

      for (let course in resSort) {
        if (i < 10) {
          this.doughnutChartLabels.push(course);
          this.doughnutChartData[0][i] = res[course];
          ++i;
        } else {
          break;
        }
      }*/

      for (let course in res) {

        if (i < 10) {
          this.doughnutChartLabels[i] = course;
          this.doughnutChartData[0][i] = res[course];
          i++;
        } else {
          break;
        }

      }
    });
  }

}
