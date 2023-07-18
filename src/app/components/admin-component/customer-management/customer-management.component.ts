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
  constructor(private service: AdminPanelCustomerManegementService) {}
  alpha: string;
  firstthCharecto: number;
  secondCharecto: number;
  thirdCharecto: string;
  fourthCharecto: number;
  fivethCharecto: number;
  sixthCharecto: number;
  seventhCharecto: number;
  eightthCharecto: number;
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
  selectAlphabetHandler(event: any) {
    this.thirdCharecto = event.target.value;
  }
  token: any;
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
    this.service.GetUserid(this.token).subscribe((o: any) => {
      this.service
        .AddCustomer({
          plaque:
            this.firstthCharecto.toString() +
            this.secondCharecto.toString() +
            this.thirdCharecto +
            this.fourthCharecto.toString() +
            this.fivethCharecto.toString() +
            this.sixthCharecto.toString() +
            this.seventhCharecto.toString() +
            this.eightthCharecto.toString(),
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

        .subscribe(() => {
          this.ngOnInit();
        });
    });
      this.service.GetUserid(this.token).subscribe((res: any) => {
        of(res).subscribe((y: any) => {
            this.service
              .AddToStore({
                engineoilbuyed: 0,
                gearboxoilbuyed: 0,
                breakeoilbuyed: 0,
                airfilterbuyed: 0,
                cabinfilterbuyed: 0,
                petrolfilterbuyed: 0,
                untifreezbuyed: 0,
                hydraulicoilbuyed: 0,
                oilfilterbuyed: 0,
                userid: y,
                breakeoilselled:this.BrakeOil.length>1? 1 : 0,
                airfilterselled:this.AirFilter.length>1? 1 : 0,
                cabinfilterselled:this.CabinFilter.length>1? 1 : 0,
                engineoilselled:this.enginoil.length>1? 1 : 0,
                gearboxoilselled:this.GearBoxOil.length>1? 1 : 0,
                hydraulicoilselled:this.hydraulicoil.length>1? 1 : 0,
                oilfilterselled:this.OilFilter.length>1? 1 : 0,
                petrolfilterselled:this.PetrolFilter.length>1? 1 : 0,
                untifreezselled:this.UntiFreeze.length>1? 1 : 0,
              })
              .subscribe();
        });
      });

    this.ngOnInit();
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.service.GetUserid(this.token).subscribe((o: any) => {
      of(o).subscribe((y: any) => {
        this.CustomerList$ = this.service.GetCustomers(y);
      });
    });
    this.loading = false;
  }
}
