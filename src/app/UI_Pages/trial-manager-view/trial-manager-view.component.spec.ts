import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialManagerViewComponent } from './trial-manager-view.component';

describe('TrialManagerViewComponent', () => {
  let component: TrialManagerViewComponent;
  let fixture: ComponentFixture<TrialManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
