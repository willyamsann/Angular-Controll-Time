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

  public copy: string;
  constructor( private scheduleService: SchedulesService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.getSchedules('1');
  }

  getSchedules(id: string): void {
    this.scheduleService.get(id)
      .subscribe(
        data => {
          this.schedules = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
