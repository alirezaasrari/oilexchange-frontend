import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminPanelCustomerManegementService } from 'src/app/services/admin-panel-customer-manegement.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  constructor(private service: AdminPanelCustomerManegementService) {}

  storename$: Observable<string>;
  userid$:Observable<number>;

  showcomponent1: boolean = true;
  showcomponent2: boolean = false;
  showcomponent3: boolean = false;
  showcomponent4: boolean = false;
  setView1() {
    this.showcomponent1 = true;
    this.showcomponent2 = false;
    this.showcomponent3 = false;
    this.showcomponent4 = false;
  }
  setView2() {
    this.showcomponent2 = true;
    this.showcomponent1 = false;
    this.showcomponent3 = false;
    this.showcomponent4 = false;
  }
  setView3() {
    this.showcomponent3 = true;
    this.showcomponent1 = false;
    this.showcomponent2 = false;
    this.showcomponent4 = false;
  }
  setView4() {
    this.showcomponent4 = true;
    this.showcomponent1 = false;
    this.showcomponent2 = false;
    this.showcomponent3 = false;
  }
  clear() {
    localStorage.clear();
  }

  token: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.service.GetUserid(this.token).subscribe((res:any) => {
      of(res).subscribe((t:any) =>{
        this.storename$ = this.service.GetStorename(t);
      })
      
    });
    
    
  }
  dataToggle(){
    if(screen.width < 991){
      return "collapse"
    }else{
      return "collapsee"
    }
  }
}
