import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedules } from '../models/schedules';

const baseUrl = 'https://localhost:44345/api/Schedules';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(private http: HttpClient) { }

  get(id: any): Observable<Schedules> {
    return this.http.get(`${baseUrl}/CollaboratorSchedulesByToday/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, 1);
  }


}