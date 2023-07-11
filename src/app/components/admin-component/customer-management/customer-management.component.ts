import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import ICustomerCarService from 'src/app/InterFaces/ICustomerCarService';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css'],
})
export class CustomerManagementComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService,private router: Router) {}

  CustomerList$: Observable<ICustomerCarService[]>;
  loading: boolean = true;
  CarServices: CarServiesCollection = new CarServiesCollection();
  rows: string[] = [
    this.CarServices.EngineOilName,
    this.CarServices.GearBoxOilName,
    this.CarServices.BrakeOilName,
    this.CarServices.AirFilterName,
    this.CarServices.CabinFilterName,
    this.CarServices.OilFilterName,
    this.CarServices.PetrolFilterName,
    this.CarServices.UntiFreezeName,
    this.CarServices.PreviouseKilometer,
    this.CarServices.NextKilometer,
    this.CarServices.hydraulicoil,
  ];
  token: string | null;
  userid: number;
  name: string;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token != null ){
      this.service.GetStorename(this.token).subscribe((res: any) => {
        of(res).subscribe((y: any) => {
          this.service.GetUserid(y).subscribe((o: any) => {
            this.CustomerList$ = this.service.GetCustomers(o);
          });
        });
      });
      this.loading = false;
    }else{
      console.log(this.token);
    }
    
  }
}
