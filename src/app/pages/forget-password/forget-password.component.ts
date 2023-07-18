import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ChangePass } from 'src/app/Models/ChangePass';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  isValid: boolean = true;
  confirmpassword: string;
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  tok: string | null;
  resetpass: ChangePass = new ChangePass();
  onResetpass(): void {
    this.tok = localStorage.getItem('forgetpasstoken');
    if (this.tok) {
      this.resetpass.Token = this.tok;
      if (this.resetpass.pass == this.confirmpassword) {
        this.service.resetpassword(this.resetpass).subscribe();
        this.router.navigate(['/login']);
        this.openSnackBar(' تغییر رمز ورود با موفقیت انجام شد');
        localStorage.removeItem('forgetpasstoken');
      } else {
        this.isValid = false;
      }
    } else {
      this.router.navigate(['login/forgetpassword']);
    }
  }
  ngOnInit(): void {}
}
