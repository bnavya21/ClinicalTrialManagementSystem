import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialsReportComponent } from './trials-report.component';

describe('TrialsReportComponent', () => {
  let component: TrialsReportComponent;
  let fixture: ComponentFixture<TrialsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
