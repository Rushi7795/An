import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Service } from './multiple-services/service';
import { SERVICE1 } from './heroes/mock-multiple-service';
import { SERVICE2 } from './heroes/mock-multiple-service';
import { MultimessagesService } from './multimessages.service';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class MSService {

  constructor(private messageService: MessageService, private mulmessageService: MultimessagesService) { }

  getMservice(id: number): Observable<Service[]> {
    const ss = of((id == 1) ? SERVICE1 : SERVICE2);
    this.messageService.add(`MSService: fetched service id=${id}`);
    return ss;
  }

  getMservice1(id: number): Observable<Service> {
    const service = SERVICE1.find(h => h.id === id)!;
    this.messageService.add(`MSService: fetched service id=${id}`);
    return of(service);
  }

  deleteMservice1(iid: number, id: number): Observable<Service[]> {
    if (iid == 1) {
      let i = SERVICE1.findIndex((s: any) => s.id == id);
      if (i > -1) {
        SERVICE1.splice(i, 1);
      }
    } else {
      let i = SERVICE2.findIndex((s: any) => s.id == id);
      if (i > -1) {
        SERVICE2.splice(i, 1);
      }
    }
    const ss = of((iid == 1) ? SERVICE1 : SERVICE2);
    this.messageService.add(`MSService: instance =${iid} delete service id=${id}`);
    return ss;
  }
}
