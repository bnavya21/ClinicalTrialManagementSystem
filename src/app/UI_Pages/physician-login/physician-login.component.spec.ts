import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianLoginComponent } from './physician-login.component';

describe('PhysicianLoginComponent', () => {
  let component: PhysicianLoginComponent;
  let fixture: ComponentFixture<PhysicianLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
