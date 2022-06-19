import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimessagesService {
  multimessages: string[] = [];

  add(multimessages: string) {
    this.multimessages.push(multimessages);
  }

  clear() {
    this.multimessages = [];
  }
}
