import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialNamesComponent } from './trial-names.component';

describe('TrialNamesComponent', () => {
  let component: TrialNamesComponent;
  let fixture: ComponentFixture<TrialNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
