import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Board } from './model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = environment.api;
  constructor(private _http: HttpClient) {}

  boards(id?: number): Observable<Board | Board[]> {
    if (id != null) {
      return this._http.get(
        `${this.REST_API_SERVER}/boards/${id}`
      ) as Observable<Board>;
    }
    return this._http.get(`${this.REST_API_SERVER}/boards/`) as Observable<
      Board[]
    >;
  }
}
