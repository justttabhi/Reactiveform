import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';        //registered

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  //Service API call
  // private url: string = 'url dalna hai' 
  url: string = "http://localhost:3000/user";

  constructor(private http: HttpClient) { }
  // sending data to backend api
  sendLoginData(loginForm: any) {
    console.log(loginForm, 'Service call')
    return this.http.post(this.url + '/login', loginForm);  //this data is send to backend through api
  }

  sendSignupData(userForm: any) {
    console.log(userForm, 'sending signup data to backend api')
    return this.http.post(this.url + '/login', userForm);  //this data is send to backend through api
  }

  // data comming from backend api
  getData(data: any) {
    console.log(data, 'data comming from backend api')
    return this.http.get(this.url + '/info_login');  //this data=[{name:'xyz', dob:'03/03/13'}] is come from backend api
  }
}
