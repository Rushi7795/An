import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimessagesComponent } from './multimessages.component';

describe('MultimessagesComponent', () => {
  let component: MultimessagesComponent;
  let fixture: ComponentFixture<MultimessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
