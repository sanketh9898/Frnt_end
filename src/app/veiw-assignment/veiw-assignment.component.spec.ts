import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAssignmentComponent } from './veiw-assignment.component';

describe('VeiwAssignmentComponent', () => {
  let component: VeiwAssignmentComponent;
  let fixture: ComponentFixture<VeiwAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
