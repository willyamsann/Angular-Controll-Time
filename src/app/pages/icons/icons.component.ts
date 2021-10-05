import { Component, OnInit } from '@angular/core';

import { SchedulesService } from 'src/app/services/schedules-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedules } from 'src/app/models/schedules' ;

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  schedules: Schedules
  dateToday:Date;
  public copy: string;
  constructor( private scheduleService: SchedulesService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.dateToday = new Date();
    this.schedules = new Schedules();
    this.getSchedules('1');
  }

  getSchedules(id: string): void {
    this.scheduleService.get(id)
      .subscribe(
        data => {
          this.schedules = data;
          this.schedules.entryDate = new Date(this.schedules.entry);
          this.schedules.departureTimeDate = new Date(this.schedules.departureTime);
          this.schedules.lunchTimeDate = new Date(this.schedules.lunchTime);
          this.schedules.returnLunchTimeDate = new Date(this.schedules.returnLunchTime);
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
