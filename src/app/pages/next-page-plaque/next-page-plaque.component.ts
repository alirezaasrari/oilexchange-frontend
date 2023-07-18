import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import ICustomerCarService from 'src/app/InterFaces/ICustomerCarService';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-next-page-plaque',
  templateUrl: './next-page-plaque.component.html',
  styleUrls: ['./next-page-plaque.component.css']
})
export class NextPagePlaqueComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService,private route: ActivatedRoute,) {}
  CustomerList$: Observable<ICustomerCarService[]>;
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
  plaque: any;
  show:boolean = false;
  name:string;
  getname(id:number){
    this.service.GetStorename(id).subscribe((res:string)=>{
      this.name = res;
    })
  }
  ngOnInit(): void {
    this.plaque = this.route.snapshot.paramMap.get('plaquenumber');
    this.service.GetCustomersHistory(this.plaque).subscribe((res:ICustomerCarService[])=>{
      if(res.length == 0){
      }else{
        this.show = true;
        this.CustomerList$ = of(res) ;
      }
    });
  }
}
