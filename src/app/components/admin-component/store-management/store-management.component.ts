import { Component, OnInit } from '@angular/core';
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
  token: any;
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
  engineoilnumber: number;
  hydraulicoilnumber: number;
  airfilternumber: number;
  breakeoilnumber: number;
  cabinfilternumber: number;
  oilfilternumber: number;
  untifreeznumber: number;
  petrolfilternumber: number;
  gearboxoilnumber: number;

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

  engineoiltotal:number = 0;
  gearboxoiltotal:number = 0;
  breakeoiltotal:number = 0;
  airfiltertotal:number = 0;
  cabinefiltertotal:number = 0;
  oilfiltertotal:number = 0;
  petrolfiltertotal:number = 0;
  untifreeztotal:number = 0;
  hydrolicoiltotal:number = 0;

  disable: boolean;

  addToStore(a:number,b:number,c:number,d:number,e:number,f:number,g:number,h:number,i:number): void {
    this.service.GetUserid(this.token).subscribe((res: any) => {
      of(res).subscribe((y: any) => {
          this.service
            .AddToStore({
              engineoilbuyed: a,
              gearboxoilbuyed: b,
              breakeoilbuyed: c,
              airfilterbuyed: d,
              cabinfilterbuyed: e,
              petrolfilterbuyed: g,
              untifreezbuyed: h,
              hydraulicoilbuyed: i,
              oilfilterbuyed: f,
              userid: y,
            })
            .subscribe();
      });
    });

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
    this.token = localStorage.getItem('token');

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((res: IStore[]) => {
            this.oillist = res.map((p) => p.engineoilbuyed);
            this.length = this.oillist.length;
            for (let t = 0; t < this.length; t++) {
              this.oilsum = this.oillist[t] + this.oilsum;
            }
            this.buyedengineoilnumber$ = of(this.oilsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.gearlist = k.map((p) => p.gearboxoilbuyed);
            this.length = this.gearlist.length;
            for (let t = 0; t < this.length; t++) {
              this.gearsum = this.gearlist[t] + this.gearsum;
            }
            this.buyedgearboxoilnumber$ = of(this.gearsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.cabinlist = k.map((p) => p.cabinfilterbuyed);
            this.length = this.cabinlist.length;
            for (let t = 0; t < this.length; t++) {
              this.cabinsum = this.cabinlist[t] + this.cabinsum;
            }
            this.buyedcabinfilternumber$ = of(this.cabinsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.airlist = k.map((p) => p.airfilterbuyed);
            this.length = this.airlist.length;
            for (let t = 0; t < this.length; t++) {
              this.airsum = this.airlist[t] + this.airsum;
            }
            this.buyedairfilternumber$ = of(this.airsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.freezlist = k.map((p) => p.untifreezbuyed);
            this.length = this.freezlist.length;
            for (let t = 0; t < this.length; t++) {
              this.freezsum = this.freezlist[t] + this.freezsum;
            }
            this.buyeduntifreeznumber$ = of(this.freezsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.hydrolist = k.map((p) => p.hydraulicoilbuyed);
            this.length = this.hydrolist.length;
            for (let t = 0; t < this.length; t++) {
              this.hydrosum = this.hydrolist[t] + this.hydrosum;
            }
            this.buyedhydraulicoilnumber$ = of(this.hydrosum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.oilflist = k.map((p) => p.oilfilterbuyed);
            this.length = this.oilflist.length;
            for (let t = 0; t < this.length; t++) {
              this.oilfsum = this.oilflist[t] + this.oilfsum;
            }
            this.buyedoilfilternumber$ = of(this.oilfsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.petrollist = k.map((p) => p.petrolfilterbuyed);
            this.length = this.petrollist.length;
            for (let t = 0; t < this.length; t++) {
              this.petrolsum = this.petrollist[t] + this.petrolsum;
            }
            this.buyedpetrolfilternumber$ = of(this.petrolsum);
          });
        });

        this.service.GetUserid(this.token).subscribe((o: any) => {
          this.service.GetStore(o).subscribe((k: IStore[]) => {
            this.breaklist = k.map((p) => p.breakeoilbuyed);
            this.length = this.breaklist.length;
            for (let t = 0; t < this.length; t++) {
              this.brakesum = this.breaklist[t] + this.brakesum;
            }
            this.buyedbreakeoilnumber$ = of(this.brakesum);
          });
        });

    this.loading = false;
  }
}
