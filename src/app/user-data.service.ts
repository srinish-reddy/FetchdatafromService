import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url="";

  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get('');
  }
}
