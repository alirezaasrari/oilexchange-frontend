import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import IStore from 'src/app/InterFaces/IStore';
import { Store } from 'src/app/Models/Store';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css'],
})
export class StoreManagementComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService) {}
 
  oilsum: number = 0;
  gearsum: number = 0;
  brakesum: number = 0;
  airsum: number = 0;
  cabinsum: number = 0;
  freezsum: number = 0;
  hydrosum: number = 0;
  petrolsum: number = 0;
  oilfsum: number = 0;

  oillist: number[] = [];
  gearlist: number[] = [];
  breaklist: number[] = [];
  airlist: number[] = [];
  cabinlist: number[] = [];
  freezlist: number[] = [];
  hydrolist: number[] = [];
  petrollist: number[] = [];
  oilflist: number[] = [];
  length: number = 0;

  Services: CarServiesCollection = new CarServiesCollection();
  selled: number = 0;
  rows: string[] = [
    this.Services.EngineOilName,
    this.Services.GearBoxOilName,
    this.Services.BrakeOilName,
    this.Services.AirFilterName,
    this.Services.CabinFilterName,
    this.Services.OilFilterName,
    this.Services.PetrolFilterName,
    this.Services.UntiFreezeName,
    this.Services.PreviouseKilometer,
    this.Services.NextKilometer,
    this.Services.hydraulicoil,
  ];
  rows2: string[] = [
    this.Services.default,
    this.Services.EngineOilName,
    this.Services.GearBoxOilName,
    this.Services.BrakeOilName,
    this.Services.AirFilterName,
    this.Services.CabinFilterName,
    this.Services.OilFilterName,
    this.Services.PetrolFilterName,
    this.Services.UntiFreezeName,
    this.Services.hydraulicoil,
  ];
  loading: boolean = true;
  store: Store = new Store();
  number: number;
  engineoilnumber: number = 0;
  hydraulicoilnumber: number = 0;
  airfilternumber: number = 0;
  breakeoilnumber: number = 0;
  cabinfilternumber: number = 0;
  oilfilternumber: number = 0;
  untifreeznumber: number = 0;
  petrolfilternumber: number = 0;
  gearboxoilnumber: number = 0;

  selledengineoilnumber: number = 0;
  selledhydraulicoilnumber: number = 0;
  selledairfilternumber: number = 0;
  selledbreakeoilnumber: number = 0;
  selledcabinfilternumber: number = 0;
  selledoilfilternumber: number = 0;
  selleduntifreeznumber: number = 0;
  selledpetrolfilternumber: number = 0;
  selledgearboxoilnumber: number = 0;

  buyedengineoilnumber$: Observable<number>;
  buyedhydraulicoilnumber$: Observable<number>;
  buyedairfilternumber$: Observable<number>;
  buyedbreakeoilnumber$: Observable<number>;
  buyedcabinfilternumber$: Observable<number>;
  buyedoilfilternumber$: Observable<number>;
  buyeduntifreeznumber$: Observable<number>;
  buyedpetrolfilternumber$: Observable<number>;
  buyedgearboxoilnumber$: Observable<number>;

  disable: boolean;

  selectHandler(event: any): void {
    if (this.Services.hydraulicoil == event.target.value) {
      this.hydraulicoilnumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.AirFilterName == event.target.value) {
      this.airfilternumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.hydraulicoilnumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.BrakeOilName == event.target.value) {
      this.breakeoilnumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.hydraulicoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.CabinFilterName == event.target.value) {
      this.cabinfilternumber = this.number;
      this.hydraulicoilnumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.EngineOilName == event.target.value) {
      this.engineoilnumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.hydraulicoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.OilFilterName == event.target.value) {
      this.oilfilternumber = this.number;
      this.cabinfilternumber = 0;
      this.hydraulicoilnumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.UntiFreezeName == event.target.value) {
      this.untifreeznumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.hydraulicoilnumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
    if (this.Services.PetrolFilterName == event.target.value) {
      this.petrolfilternumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.gearboxoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.hydraulicoilnumber = 0;
    }
    if (this.Services.GearBoxOilName == event.target.value) {
      this.gearboxoilnumber = this.number;
      this.cabinfilternumber = 0;
      this.oilfilternumber = 0;
      this.hydraulicoilnumber = 0;
      this.untifreeznumber = 0;
      this.airfilternumber = 0;
      this.breakeoilnumber = 0;
      this.engineoilnumber = 0;
      this.petrolfilternumber = 0;
    }
  }

  addToStore(): void {
    this.service
      .AddToStore({
        airfilterbuyed: this.airfilternumber,
        breakeoilbuyed: this.breakeoilnumber,
        cabinfilterbuyed: this.cabinfilternumber,
        engineoilbuyed: this.engineoilnumber,
        gearboxoilbuyed: this.gearboxoilnumber,
        hydraulicoilbuyed: this.hydraulicoilnumber,
        oilfilterbuyed: this.oilfilternumber,
        petrolfilterbuyed: this.petrolfilternumber,
        untifreezbuyed: this.untifreeznumber,
        userid: 1152,
      })
      .subscribe();
    this.airfilternumber = 0;
    this.hydraulicoilnumber = 0;
    this.breakeoilnumber = 0;
    this.cabinfilternumber = 0;
    this.engineoilnumber = 0;
    this.oilfilternumber = 0;
    this.untifreeznumber = 0;
    this.petrolfilternumber = 0;
    this.gearboxoilnumber = 0;
    this.oilsum = 0;
    this.gearsum = 0;
    this.brakesum = 0;
    this.airsum = 0;
    this.cabinsum = 0;
    this.freezsum = 0;
    this.hydrosum = 0;
    this.petrolsum = 0;
    this.oilfsum = 0;
    this.loading = true;
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.oillist = res.map((o) => o.engineoilbuyed);
      this.length = this.oillist.length;
      for (let t = 0; t < this.length; t++) {
        this.oilsum = this.oillist[t] + this.oilsum;
      }
      this.buyedengineoilnumber$ = of(this.oilsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.gearlist = res.map((o) => o.gearboxoilbuyed);
      this.length = this.gearlist.length;
      for (let t = 0; t < this.length; t++) {
        this.gearsum = this.gearlist[t] + this.gearsum;
      }
      this.buyedgearboxoilnumber$ = of(this.gearsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.cabinlist = res.map((o) => o.cabinfilterbuyed);
      this.length = this.cabinlist.length;
      for (let t = 0; t < this.length; t++) {
        this.cabinsum = this.cabinlist[t] + this.cabinsum;
      }
      this.buyedcabinfilternumber$ = of(this.cabinsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.airlist = res.map((o) => o.airfilterbuyed);
      this.length = this.airlist.length;
      for (let t = 0; t < this.length; t++) {
        this.airsum = this.airlist[t] + this.airsum;
      }
      this.buyedairfilternumber$ = of(this.airsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.freezlist = res.map((o) => o.untifreezbuyed);
      this.length = this.freezlist.length;
      for (let t = 0; t < this.length; t++) {
        this.freezsum = this.freezlist[t] + this.freezsum;
      }
      this.buyeduntifreeznumber$ = of(this.freezsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.hydrolist = res.map((o) => o.hydraulicoilbuyed);
      this.length = this.hydrolist.length;
      for (let t = 0; t < this.length; t++) {
        this.hydrosum = this.hydrolist[t] + this.hydrosum;
      }
      this.buyedhydraulicoilnumber$ = of(this.hydrosum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.oilflist = res.map((o) => o.oilfilterbuyed);
      this.length = this.oilflist.length;
      for (let t = 0; t < this.length; t++) {
        this.oilfsum = this.oilflist[t] + this.oilfsum;
      }
      this.buyedoilfilternumber$ = of(this.oilfsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.petrollist = res.map((o) => o.petrolfilterbuyed);
      this.length = this.petrollist.length;
      for (let t = 0; t < this.length; t++) {
        this.petrolsum = this.petrollist[t] + this.petrolsum;
      }
      this.buyedpetrolfilternumber$ = of(this.petrolsum);
    });
    this.service.GetStore(1152).subscribe((res: IStore[]) => {
      this.breaklist = res.map((o) => o.breakeoilbuyed);
      this.length = this.breaklist.length;
      for (let t = 0; t < this.length; t++) {
        this.brakesum = this.breaklist[t] + this.brakesum;
      }
      this.buyedbreakeoilnumber$ = of(this.brakesum);
    });
    this.loading = false;
  }
}