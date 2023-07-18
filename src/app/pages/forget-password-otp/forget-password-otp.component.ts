import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-forget-password-otp',
  templateUrl: './forget-password-otp.component.html',
  styleUrls: ['./forget-password-otp.component.css'],
})
export class ForgetPasswordOtpComponent {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  phone: string;
  changePass() {
    this.service.forgetpassword(this.phone).subscribe((res: string) => {
      localStorage.setItem('forgetpasstoken', res);
      this.openSnackBar('شما میتوانید رمز حساب کاربری خود را تغییر دهید');
      this.router.navigate(['/login/forgetpassword']);
    });
  }
}
