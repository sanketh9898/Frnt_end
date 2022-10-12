import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetAllowanceComponent } from './net-allowance.component';

describe('NetAllowanceComponent', () => {
  let component: NetAllowanceComponent;
  let fixture: ComponentFixture<NetAllowanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetAllowanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
