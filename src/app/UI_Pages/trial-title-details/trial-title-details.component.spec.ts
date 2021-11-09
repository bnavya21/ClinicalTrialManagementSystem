import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialTitleDetailsComponent } from './trial-title-details.component';

describe('TrialTitleDetailsComponent', () => {
  let component: TrialTitleDetailsComponent;
  let fixture: ComponentFixture<TrialTitleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialTitleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialTitleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
