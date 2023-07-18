import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService
  ) {}
  loginrequest: LoginRequest = new LoginRequest();
  check: boolean = true;
  Check():boolean{
    return this.check = !this.check;
  }
  OnLOgin() {
    this.service.login(this.loginrequest).subscribe((token: string) => {
      if (this.check) {
        localStorage.setItem('phonenumber', this.loginrequest.Phonenumber);
        localStorage.setItem('pass', this.loginrequest.pass);
      }else if(!this.check){
        localStorage.setItem('phonenumber', '');
        localStorage.setItem('pass', '');
      }
      localStorage.setItem('token', token);
      this.router.navigate(['/login/adminpanel']);
    });
  }
  ngOnInit(): void {
    const phone = localStorage.getItem('phonenumber');
    const pas = localStorage.getItem('pass');
    if (phone && pas) {
      this.loginrequest.Phonenumber = phone;
      this.loginrequest.pass = pas;
    }
  }
}
