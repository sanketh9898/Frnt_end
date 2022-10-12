import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsaFgComponent } from './esa-fg.component';

describe('EsaFgComponent', () => {
  let component: EsaFgComponent;
  let fixture: ComponentFixture<EsaFgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsaFgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsaFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
