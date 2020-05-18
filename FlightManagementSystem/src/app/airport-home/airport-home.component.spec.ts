import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportHomeComponent } from './airport-home.component';

describe('AirportHomeComponent', () => {
  let component: AirportHomeComponent;
  let fixture: ComponentFixture<AirportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
