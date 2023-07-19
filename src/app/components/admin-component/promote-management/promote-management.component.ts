import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private service: AdminPanelCustomerManegementService,
    private _snackBar: MatSnackBar
  ) {}
  promoted: Promote = new Promote();
  token: any;
  show:boolean = false;
  request$:Observable<string>[] = [];
  ngOnInit(): void {
    this.service.GetUserid().subscribe((res: any) => {
      of(res).subscribe((t: any) => {
      this.service.Getpromoted(t).subscribe((r:string) =>{
        if(r != null){
          this.request$.push(of(r.split("T")[0]));
          this.show = true;
        }else{
          this.show = false;
        }
        
      });
      });
    });
  }
  addToPromotedList() {
    this.service.GetUserid().subscribe((res: any) => {
      of(res).subscribe((t: any) => {
        this.promoted.UserId = t;
        this.service.Promote(this.promoted).subscribe(() => {
          this.openSnackBar('درخواست شما ثبت شد ');
          this.ngOnInit();
        });
      });
    });
  }
  remove(){
    this.service.GetUserid().subscribe((res: any) => {
      of(res).subscribe((t: any) => {
        this.service.deletePromote(t).subscribe(() => {
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
