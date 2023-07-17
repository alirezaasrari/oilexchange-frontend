import { Component } from '@angular/core';
import { IPlaqueObject } from 'src/app/InterFaces/IPlaqueObject';
import { plaqueObject } from 'src/app/Models/PlaqueObject';
import { HistoryService } from 'src/app/services/historyService/history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: HistoryService) {}
  ngOnInit(): void {}
  plaqueobject: plaqueObject = new plaqueObject();

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
  plaquenumber: string;
  firstCharector: number;
  secondCharector: number;
  thirdCharector: string;
  fourthCharector: number;
  fivthCharector: number;
  sixthCharector: number;
  seventhCharector: number;
  eighththCharector: number;
  // plaque: plaqueObject = new plaqueObject();
  selectAlphabetHandler(event: any) {
    this.thirdCharector = event.target.value;
  }

  onSearch() {
    this.plaquenumber= this.eighththCharector.toString() +
    this.seventhCharector.toString() +
    this.sixthCharector.toString() +
    this.fivthCharector.toString() + 
    this.fourthCharector.toString() + 
    this.thirdCharector +
    this.secondCharector.toString() +
    this.firstCharector.toString() ;
    console.log(this.plaquenumber);
   
  }
}
