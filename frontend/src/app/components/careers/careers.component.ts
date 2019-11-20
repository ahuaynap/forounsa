import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Career } from 'src/app/interfaces/career.interface';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  private careers: Career[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCareers();
  }

  getCareers() {
    this.dataService.getCareers().subscribe(res => {
      this.careers = res;
    });
  }

}
