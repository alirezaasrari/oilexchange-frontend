import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Models/LoginRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router,private service: AdminPanelCustomerManegementService) {}
  storename: string = '';
  pass: string = '';
  loginrequest: LoginRequest = new LoginRequest();
  OnLOgin(name: string, pass: string) {
    this.loginrequest.storename = name;
    this.loginrequest.pass = pass;
    this.service.login(this.loginrequest).subscribe((token: string) => {
      localStorage.setItem('token', token);
      this.router.navigate(['/login/adminpanel']);
    });
    
  }
}
