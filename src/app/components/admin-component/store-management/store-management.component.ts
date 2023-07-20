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
  oilsum2: number = 0;
  gearsum: number = 0;
  gearsum2: number = 0;
  brakesum: number = 0;
  brakesum2: number = 0;
  airsum: number = 0;
  airsum2: number = 0;
  cabinsum: number = 0;
  cabinsum2: number = 0;
  freezsum: number = 0;
  freezsum2: number = 0;
  hydrosum: number = 0;
  hydrosum2: number = 0;
  petrolsum: number = 0;
  petrolsum2: number = 0;
  oilfsum: number = 0;
  oilfsum2: number = 0;

  oillist: number[] = [];
  oillist2: number[] = [];
  gearlist: number[] = [];
  gearlist2: number[] = [];
  breaklist: number[] = [];
  breaklist2: number[] = [];
  airlist: number[] = [];
  airlist2: number[] = [];
  cabinlist: number[] = [];
  cabinlist2: number[] = [];
  freezlist: number[] = [];
  freezlist2: number[] = [];
  hydrolist: number[] = [];
  hydrolist2: number[] = [];
  petrollist: number[] = [];
  petrollist2: number[] = [];
  oilflist: number[] = [];
  oilflist2: number[] = [];
  length: number = 0;
  length2: number = 0;

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
  loading1: boolean = true;
  loading2: boolean = true;
  loading3: boolean = true;
  loading4: boolean = true;
  loading5: boolean = true;
  loading6: boolean = true;
  loading7: boolean = true;
  loading8: boolean = true;
  loading9: boolean = true;
  loading10: boolean = true;
  loading11: boolean = true;
  loading12: boolean = true;
  loading13: boolean = true;
  loading14: boolean = true;
  loading15: boolean = true;
  loading16: boolean = true;
  loading17: boolean = true;
  loading18: boolean = true;
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

  selledengineoilnumber$: Observable<number>;
  selledhydraulicoilnumber$: Observable<number>;
  selledairfilternumber$: Observable<number>;
  selledbreakeoilnumber$: Observable<number>;
  selledcabinfilternumber$: Observable<number>;
  selledoilfilternumber$: Observable<number>;
  selleduntifreeznumber$: Observable<number>;
  selledpetrolfilternumber$: Observable<number>;
  selledgearboxoilnumber$: Observable<number>;

  buyedengineoilnumber$: Observable<number>;
  buyedhydraulicoilnumber$: Observable<number>;
  buyedairfilternumber$: Observable<number>;
  buyedbreakeoilnumber$: Observable<number>;
  buyedcabinfilternumber$: Observable<number>;
  buyedoilfilternumber$: Observable<number>;
  buyeduntifreeznumber$: Observable<number>;
  buyedpetrolfilternumber$: Observable<number>;
  buyedgearboxoilnumber$: Observable<number>;

  engineoiltotal: number = 0;
  gearboxoiltotal: number = 0;
  breakeoiltotal: number = 0;
  airfiltertotal: number = 0;
  cabinefiltertotal: number = 0;
  oilfiltertotal: number = 0;
  petrolfiltertotal: number = 0;
  untifreeztotal: number = 0;
  hydrolicoiltotal: number = 0;

  disable: boolean;

  addToStore(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number,
    g: number,
    h: number,
    i: number
  ): void {
    this.service.GetUserid().subscribe((res: any) => {
      of(res).subscribe((y: any) => {
        this.service
          .AddToStore({
            engineoilbuyed: a,
            engineoilselled: 0,
            gearboxoilbuyed: b,
            gearboxoilselled: 0,
            breakeoilbuyed: c,
            breakeoilselled: 0,
            airfilterbuyed: d,
            airfilterselled: 0,
            cabinfilterbuyed: e,
            cabinfilterselled: 0,
            petrolfilterbuyed: g,
            petrolfilterselled: 0,
            untifreezbuyed: h,
            untifreezselled: 0,
            hydraulicoilbuyed: i,
            hydraulicoilselled: 0,
            oilfilterbuyed: f,
            oilfilterselled: 0,
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
    this.oilsum2 = 0;
    this.gearsum = 0;
    this.gearsum2 = 0;
    this.brakesum = 0;
    this.brakesum2 = 0;
    this.airsum = 0;
    this.airsum2 = 0;
    this.cabinsum = 0;
    this.cabinsum2 = 0;
    this.freezsum = 0;
    this.freezsum2 = 0;
    this.hydrosum = 0;
    this.hydrosum2 = 0;
    this.petrolsum = 0;
    this.petrolsum2 = 0;
    this.oilfsum = 0;
    this.oilfsum2 = 0;
    this.loading1 = true;
    this.loading2 = true;
    this.loading3 = true;
    this.loading4 = true;
    this.loading5 = true;
    this.loading6 = true;
    this.loading7 = true;
    this.loading8 = true;
    this.loading9 = true;
    this.loading10 = true;
    this.loading11 = true;
    this.loading12 = true;
    this.loading13 = true;
    this.loading14 = true;
    this.loading15 = true;
    this.loading16 = true;
    this.loading17 = true;
    this.loading18 = true;
    this.ngOnInit();
  }
  ngOnInit(): void {

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((res: IStore[]) => {
        this.oillist = res.map((p) => p.engineoilbuyed);
        this.length = this.oillist.length;
        for (let t = 0; t < this.length; t++) {
          this.oilsum = this.oillist[t] + this.oilsum;
        }
        this.buyedengineoilnumber$ = of(this.oilsum);
        this.loading1 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((res: IStore[]) => {
        this.oillist2 = res.map((p) => p.engineoilselled);
        this.length2 = this.oillist2.length;
        for (let t = 0; t < this.length2; t++) {
          this.oilsum2 = this.oillist2[t] + this.oilsum2;
        }
        this.selledengineoilnumber$ = of(this.oilsum2);
        this.loading2 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.gearlist = k.map((p) => p.gearboxoilbuyed);
        this.length = this.gearlist.length;
        for (let t = 0; t < this.length; t++) {
          this.gearsum = this.gearlist[t] + this.gearsum;
        }
        this.buyedgearboxoilnumber$ = of(this.gearsum);
        this.loading3 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.gearlist2 = k.map((p) => p.gearboxoilselled);
        this.length2 = this.gearlist2.length;
        for (let t = 0; t < this.length; t++) {
          this.gearsum2 = this.gearlist2[t] + this.gearsum2;
        }
        this.selledgearboxoilnumber$ = of(this.gearsum2);
        this.loading4 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.cabinlist = k.map((p) => p.cabinfilterbuyed);
        this.length = this.cabinlist.length;
        for (let t = 0; t < this.length; t++) {
          this.cabinsum = this.cabinlist[t] + this.cabinsum;
        }
        this.buyedcabinfilternumber$ = of(this.cabinsum);
        this.loading9 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.cabinlist2 = k.map((p) => p.cabinfilterselled);
        this.length2 = this.cabinlist2.length;
        for (let t = 0; t < this.length2; t++) {
          this.cabinsum2 = this.cabinlist2[t] + this.cabinsum2;
        }
        this.selledcabinfilternumber$ = of(this.cabinsum2);
        this.loading10 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.airlist = k.map((p) => p.airfilterbuyed);
        this.length = this.airlist.length;
        for (let t = 0; t < this.length; t++) {
          this.airsum = this.airlist[t] + this.airsum;
        }
        this.buyedairfilternumber$ = of(this.airsum);
        this.loading7 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.airlist2 = k.map((p) => p.airfilterselled);
        this.length2 = this.airlist.length;
        for (let t = 0; t < this.length; t++) {
          this.airsum2 = this.airlist2[t] + this.airsum2;
        }
        this.selledairfilternumber$ = of(this.airsum2);
        this.loading8 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.freezlist = k.map((p) => p.untifreezbuyed);
        this.length = this.freezlist.length;
        for (let t = 0; t < this.length; t++) {
          this.freezsum = this.freezlist[t] + this.freezsum;
        }
        this.buyeduntifreeznumber$ = of(this.freezsum);
        this.loading15 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.freezlist2 = k.map((p) => p.untifreezselled);
        this.length2 = this.freezlist2.length;
        for (let t = 0; t < this.length2; t++) {
          this.freezsum2 = this.freezlist2[t] + this.freezsum2;
        }
        this.selleduntifreeznumber$ = of(this.freezsum2);
        this.loading16 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.hydrolist = k.map((p) => p.hydraulicoilbuyed);
        this.length = this.hydrolist.length;
        for (let t = 0; t < this.length; t++) {
          this.hydrosum = this.hydrolist[t] + this.hydrosum;
        }
        this.buyedhydraulicoilnumber$ = of(this.hydrosum);
        this.loading17 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.hydrolist2 = k.map((p) => p.hydraulicoilselled);
        this.length2 = this.hydrolist2.length;
        for (let t = 0; t < this.length2; t++) {
          this.hydrosum2 = this.hydrolist2[t] + this.hydrosum2;
        }
        this.selledhydraulicoilnumber$ = of(this.hydrosum2);
        this.loading18 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.oilflist = k.map((p) => p.oilfilterbuyed);
        this.length = this.oilflist.length;
        for (let t = 0; t < this.length; t++) {
          this.oilfsum = this.oilflist[t] + this.oilfsum;
        }
        this.buyedoilfilternumber$ = of(this.oilfsum);
        this.loading11 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.oilflist2 = k.map((p) => p.oilfilterselled);
        this.length2 = this.oilflist2.length;
        for (let t = 0; t < this.length2; t++) {
          this.oilfsum2 = this.oilflist2[t] + this.oilfsum2;
        }
        this.selledoilfilternumber$ = of(this.oilfsum2);
        this.loading12 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.petrollist = k.map((p) => p.petrolfilterbuyed);
        this.length = this.petrollist.length;
        for (let t = 0; t < this.length; t++) {
          this.petrolsum = this.petrollist[t] + this.petrolsum;
        }
        this.buyedpetrolfilternumber$ = of(this.petrolsum);
        this.loading13 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.petrollist2 = k.map((p) => p.petrolfilterselled);
        this.length2 = this.petrollist.length;
        for (let t = 0; t < this.length2; t++) {
          this.petrolsum2 = this.petrollist2[t] + this.petrolsum2;
        }
        this.selledpetrolfilternumber$ = of(this.petrolsum2);
        this.loading14 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.breaklist = k.map((p) => p.breakeoilbuyed);
        this.length = this.breaklist.length;
        for (let t = 0; t < this.length; t++) {
          this.brakesum = this.breaklist[t] + this.brakesum;
        }
        this.buyedbreakeoilnumber$ = of(this.brakesum);
        this.loading5 = false;
      });
    });

    this.service.GetUserid().subscribe((o: any) => {
      this.service.GetStore(o).subscribe((k: IStore[]) => {
        this.breaklist2 = k.map((p) => p.breakeoilselled);
        this.length2 = this.breaklist.length;
        for (let t = 0; t < this.length2; t++) {
          this.brakesum2 = this.breaklist2[t] + this.brakesum2;
        }
        this.selledbreakeoilnumber$ = of(this.brakesum2);
        this.loading6 = false;
      });
    });
  }
}
