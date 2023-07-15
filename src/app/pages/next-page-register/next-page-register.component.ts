import { Component, OnInit } from '@angular/core';
import { RegisterRequst } from 'src/app/Models/RegisterRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-next-page-register',
  templateUrl: './next-page-register.component.html',
  styleUrls: ['./next-page-register.component.css'],
})
export class NextPageRegisterComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService) {}
  password: string = '';
  storename: string = '';
  phone: string = '';
  confirmpassword: string = '';

  registerrequest: RegisterRequst = new RegisterRequst();

  onRegister(phone:string,storename:string,password:string,confirmpassword:string): void {
    this.registerrequest.pass = password;
    this.registerrequest.storename = storename;
    this.registerrequest.phonenumber = phone;
    this.registerrequest.registereddate = new Date();
    this.service.Register(this.registerrequest).subscribe();
  }
  ngOnInit(): void {
    
  }
}
