import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContestServiceService {

  constructor(private http: HttpClient) { }

  getListContest(): Observable<any> {
    return this.http.get(`${environment.contestUrl}`);
  }

}
