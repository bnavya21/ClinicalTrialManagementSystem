import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianRegisterComponent } from './physician-register.component';

describe('PhysicianRegisterComponent', () => {
  let component: PhysicianRegisterComponent;
  let fixture: ComponentFixture<PhysicianRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
