import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ICustomerCarService from '../InterFaces/ICustomerCarService';
import { Observable } from 'rxjs';
import IRegister from '../InterFaces/IRegister';
import { ILogin } from '../InterFaces/ILogin';
import IStore from '../InterFaces/IStore';

@Injectable({
  providedIn: 'root',
})
export class AdminPanelCustomerManegementService {
  readonly oilexchangeserverurl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  public AddCustomer(data: ICustomerCarService) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post(
      this.oilexchangeserverurl + '/CustomerManegement/addcustomer',
      data,
      { headers }
    );
  }
  public Register(data: IRegister): Observable<any> {
    return this.http.post<any>(
      this.oilexchangeserverurl + '/Auth/register',
      data
    );
  }
  public login(data: ILogin): Observable<string> {
    return this.http.post(this.oilexchangeserverurl + '/Auth/login', data, {
      responseType: 'text',
    });
  }
  public AddToStore(data: IStore) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post(
      this.oilexchangeserverurl + '/Store/addtostore',
      data,{ headers }
    );
  }
  public GetStore(num: number): Observable<IStore[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<IStore[]>(
      this.oilexchangeserverurl + `/Store/getstore?request=${num}`,
      { headers }
    );
  }
  public GetStorename(userid:number): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get(
      this.oilexchangeserverurl + `/Store/getstorename?request=${userid}`,
      { responseType: 'text',headers }
    );
  }
  public GetUserid(token: string): Observable<number> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<number>(
      this.oilexchangeserverurl +
        `/Store/get-userid?token=${token}`,
      { headers }
    );
  }
  public GetCustomers(userid: number): Observable<ICustomerCarService[]> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<ICustomerCarService[]>(
      this.oilexchangeserverurl +
        `/CustomerManegement/getcustomers?userid=${userid}`,
      { headers }
    );
  }
  public GetCustomersHistory(plaque: string): Observable<ICustomerCarService[]> {
    
    return this.http.get<ICustomerCarService[]>(
      this.oilexchangeserverurl +
        `/HistoryCheck/historycheck/${plaque}`,

    );
  }
  public forgetpassword(phone: string): Observable<string> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<string>(
      this.oilexchangeserverurl +
        `/Auth/forget-password?phone=${phone}`,
      { headers }
    );
  }
  public resetpassword(token: string,
  pass: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(
      this.oilexchangeserverurl +
        `/Auth/Reset-password?userid`,
      { headers }
    );
  }
}
