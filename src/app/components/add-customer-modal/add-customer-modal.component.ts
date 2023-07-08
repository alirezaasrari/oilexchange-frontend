import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';
import { CarServiesCollection } from 'src/app/staticValues/CarServiesCollection';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css'],
})
export class AddCustomerModalComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService) {}
  ngOnInit(): void {}
  carServices: CarServiesCollection = new CarServiesCollection();
  rows: string[] = [
    this.carServices.EngineOilName,
    this.carServices.GearBoxOilName,
    this.carServices.BrakeOilName,
    this.carServices.AirFilterName,
    this.carServices.CabinFilterName,
    this.carServices.OilFilterName,
    this.carServices.PetrolFilterName,
    this.carServices.UntiFreezeName,
    this.carServices.PreviouseKilometer,
    this.carServices.NextKilometer,
    this.carServices.hydraulicoil,
  ];

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
  userid: number = 1152;
  servicedate: Date = new Date();
  hydraulicoil: string = '';

  addCustomer(): void {
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
        userid: 1152,
        hydraulicoil: this.hydraulicoil,
      })
      .subscribe();
  }
}
