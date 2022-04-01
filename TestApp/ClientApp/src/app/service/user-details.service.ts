import { Component, Inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../model/user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  userhandlerurl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.userhandlerurl = baseUrl;
  }

  saveUserDetails(userDetails: UserDetails) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<UserDetails>(this.userhandlerurl + 'userdetails', userDetails, httpOptions);
  }
}
