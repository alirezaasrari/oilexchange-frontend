import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterRequst } from 'src/app/Models/RegisterRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-next-page-register',
  templateUrl: './next-page-register.component.html',
  styleUrls: ['./next-page-register.component.css'],
})
export class NextPageRegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}

  confirmpassword: string;

  registerrequest: RegisterRequst = new RegisterRequst();
  isValid: boolean = true;

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  onRegister(): void {
    if (this.registerrequest.pass == this.confirmpassword) {
      this.service.Register(this.registerrequest).subscribe();
      this.router.navigate(['/login']);
      this.openSnackBar('ثبت نام با موفقیت انجام شد');
    }else{
      this.isValid = false;
      this.router.navigate(['/register']);
    }
  }
  ngOnInit(): void {}
}
