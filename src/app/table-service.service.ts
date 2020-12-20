import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Table } from '../app/table';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/booking';
  }
 
  public findAll(): Observable<Table[]> {
    return this.http.get<Table[]>(this.usersUrl+"/all");
  }

  public save(user: Table) {
    return this.http.post<Table>(this.usersUrl+"/add", user);
  }
}
