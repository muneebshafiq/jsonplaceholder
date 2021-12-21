import { IUser } from './../../models/users/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private endpoint = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    // Add a request to get users using `endpoint`
    return this.http.get<IUser[]>(this.endpoint);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(this.endpoint+`/${id}`);
  }
}
