import { Component, OnInit } from '@angular/core';
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
  constructor(
    private service: AdminPanelCustomerManegementService) {}

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
  alphaBets: string[] = [
    'الف',
    'ب',
    'پ',
    'ت',
    'ث',
    'ج',
    'چ',
    'ح',
    'خ',
    'د',
    'ذ',
    'ر',
    'ز',
    'ژ',
    'س',
    'ش',
    'ص',
    'ض',
    'ط',
    'ظ',
    'ع',
    'غ',
    'ف',
    'ق',
    'ک',
    'گ',
    'ل',
    'م',
    'ن',
    'و',
    'ه',
    'ی',
  ];
  token: string | null;
  userid: number;
  name: string;
  enginoil: string = '';
  GearBoxOil: string = '';
  BrakeOil: string = '';
  AirFilter: string = '';
  CabinFilter: string = '';
  OilFilter: string = '';
  PetrolFilter: string = '';
  UntiFreeze: string = '';
  PreviouseKilometer: string = '';
  NextKilometer: string = '';
  plaque: string = '';
  servicedate: '';
  hydraulicoil: string = '';
  addCustomer(): void {
    this.service.GetStorename(this.token).subscribe((res: any) => {
      of(res).subscribe((y: any) => {
        this.service.GetUserid(y).subscribe((o: any) => {
          this.service
            .AddCustomer({
              plaque: this.plaque,
              servicedate: this.servicedate,
              engineoil: this.enginoil,
              gearboxoil: this.GearBoxOil,
              cabinfilter: this.CabinFilter,
              oilfilter: this.OilFilter,
              airfilter: this.AirFilter,
              petrolfilter: this.PetrolFilter,
              breakeoil: this.BrakeOil,
              untifreez: this.UntiFreeze,
              previouskilometer: this.PreviouseKilometer,
              nextkilometer: this.NextKilometer,
              hydraulicoil: this.hydraulicoil,
              userid: o,
            })
            .subscribe();
        });
      });
    });
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.service.GetStorename(this.token).subscribe((res: any) => {
        of(res).subscribe((y: any) => {
          this.service.GetUserid(y).subscribe((o: any) => {
            this.CustomerList$ = this.service.GetCustomers(o);
          });
        });
      });
      this.loading = false;
    } else {
      console.log(this.token);
    }
  }
}
