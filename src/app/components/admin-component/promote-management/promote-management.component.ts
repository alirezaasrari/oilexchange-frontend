import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import Promote from 'src/app/Models/Promote';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-promote-management',
  templateUrl: './promote-management.component.html',
  styleUrls: ['./promote-management.component.css'],
})
export class PromoteManagementComponent implements OnInit {
  constructor(
    private router: Router,
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  promoted: Promote = new Promote();
  token: any;
  request$:Observable<string>;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.service.GetUserid(this.token).subscribe((res: any) => {
      of(res).subscribe((t: any) => {
        this.service.Getpromoted(t).subscribe((h:any) => {
          this.request$ = h
         });
      });
    });
  }
  addToPromotedList() {
    this.token = localStorage.getItem('token');
    this.service.GetUserid(this.token).subscribe((res: any) => {
      of(res).subscribe((t: any) => {
        this.promoted.UserId = t;
        this.service.Promote(this.promoted).subscribe(() => {
          this.openSnackBar('درخواست شما ثبت شد ');
          this.ngOnInit();
        });
      });
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
