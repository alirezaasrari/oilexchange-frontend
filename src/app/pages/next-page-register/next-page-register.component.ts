import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterRequst } from 'src/app/Models/RegisterRequest';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-next-page-register',
  templateUrl: './next-page-register.component.html',
  styleUrls: ['./next-page-register.component.css'],
})
export class NextPageRegisterComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService ,private _snackBar: MatSnackBar) {}
  password: string = '';
  storename: string = '';
  phone: string = '';
  confirmpassword: string = '';

  registerrequest: RegisterRequst = new RegisterRequst();
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  onRegister(): void {
    this.service.Register(this.registerrequest).subscribe();
    this.openSnackBar("kjhjkhkj");
  }
  ngOnInit(): void {
    
  }
}
