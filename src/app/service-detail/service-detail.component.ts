import { Component, OnInit } from '@angular/core';
import { Service } from '../multiple-services/service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MSService } from '../ms.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private msService: MSService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getService1();
    //this.getService2();
  }

  getService1(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.msService.getMservice1(id).subscribe(service => this.service = service);
  }

  // getService2(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.msService.getMservice2(id).subscribe(service => this.service = service);
  // }

  goBack(): void {
    this.location.back();
  }


}
