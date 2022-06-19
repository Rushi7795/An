import { Component, Input, OnInit } from '@angular/core';
import { Service } from './service-instance';
import { MSService } from '../ms.service';

@Component({
  selector: 'app-service-instance',
  templateUrl: './service-instance.component.html',
  styleUrls: ['./service-instance.component.css']
})
export class ServiceInstanceComponent implements OnInit {
  @Input() instanceVal: any;
  ss: Service[] = [];
  //ss: any = [];

  constructor(private msService: MSService) { }

  ngOnInit(): void {
    this.getMservice();
  }

  getMservice(): void {
    const id = Number(this.instanceVal);
    this.msService.getMservice(id).subscribe(ss => this.ss = ss);
    // const id = Number(this.instanceVal);
    // this.msService.getMservice1(id).subscribe((ss: any) => this.ss = ss);
  }

  delete(service: any) {
    const iid = Number(this.instanceVal);
    let i = this.ss.findIndex((s: any) => s.id == service.id);
    if (i > -1) {
      //this.ss.splice(i, 1);
      this.msService.deleteMservice1(iid,service.id).subscribe((ss: any) => this.ss = ss);
    }
  }

}
