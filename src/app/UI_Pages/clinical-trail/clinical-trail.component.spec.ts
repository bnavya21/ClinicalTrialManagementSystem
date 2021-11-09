import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalTrailComponent } from './clinical-trail.component';

describe('ClinicalTrailComponent', () => {
  let component: ClinicalTrailComponent;
  let fixture: ComponentFixture<ClinicalTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicalTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
