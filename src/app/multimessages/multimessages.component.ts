import { Component, OnInit } from '@angular/core';
import { MultimessagesService } from '../multimessages.service';

@Component({
  selector: 'app-multimessages',
  templateUrl: './multimessages.component.html',
  styleUrls: ['./multimessages.component.css']
})
export class MultimessagesComponent implements OnInit {

  constructor(public mulmessageService: MultimessagesService) { }

  ngOnInit(): void {
  }

}
