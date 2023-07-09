import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import ICustomerCarService from '../InterFaces/ICustomerCarService';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
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
    return this.http.post(
      this.oilexchangeserverurl + '/CustomerManegement/addcustomer',
      data
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
  public GetMe(): Observable<string> {
    return this.http.get(this.oilexchangeserverurl + '/Auth', {
      responseType: 'text',
    });
  }
  public AddToStore(data: IStore) {
    return this.http.post(
      this.oilexchangeserverurl + '/Store/addtostore',
      data
    );
  }
  public GetStore(num: number): Observable<IStore[]> {
    return this.http.get<IStore[]>(
      this.oilexchangeserverurl + `/Store/getstore?request=${num}`
    );
  }
  public GetStorename(token: string | undefined | null): Observable<string> {
    return this.http.get(
      this.oilexchangeserverurl + `/Store/getstorename?token=${token}`,
      { responseType: 'text' }
    );
  }
  public GetUserid(
    storename:string
  ): Observable<number> {
    return this.http.get<number>(
      this.oilexchangeserverurl +
        `/CustomerManegement/get-userid?storename=${storename}`
    );
  }
 public GetCustomers(
    userid:number
  ):Observable<ICustomerCarService[]> {
     return  this.http.get<ICustomerCarService[]>(
      this.oilexchangeserverurl +
        `/CustomerManegement/getcustomers?userid=${userid}`
    );
  }
}
