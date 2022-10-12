import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNetComponent } from './update-net.component';

describe('UpdateNetComponent', () => {
  let component: UpdateNetComponent;
  let fixture: ComponentFixture<UpdateNetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
