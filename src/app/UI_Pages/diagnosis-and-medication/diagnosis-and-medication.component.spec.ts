import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisAndMedicationComponent } from './diagnosis-and-medication.component';

describe('DiagnosisAndMedicationComponent', () => {
  let component: DiagnosisAndMedicationComponent;
  let fixture: ComponentFixture<DiagnosisAndMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosisAndMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisAndMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
