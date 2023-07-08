import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  constructor(private service: AdminPanelCustomerManegementService) {}

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
  storename:string;
  userid:number = 1194;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.service.GetStorename(this.token).subscribe((res: any) => {
        this.storename = res;
      });
      this.service.GetUserid(this.storename).subscribe((res: any) => {
        this.userid = res;
      });
      console.log(this.userid);
      this.CustomerList$ = this.service.GetCustomers(this.userid);
      this.loading = false;
    } else {
      this.loading = true;
    }
  }
}
