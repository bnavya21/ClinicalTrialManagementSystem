import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailManagerLoginComponent } from './trail-manager-login.component';

describe('TrailManagerLoginComponent', () => {
  let component: TrailManagerLoginComponent;
  let fixture: ComponentFixture<TrailManagerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailManagerLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailManagerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
