import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailNameListComponent } from './trail-name-list.component';

describe('TrailNameListComponent', () => {
  let component: TrailNameListComponent;
  let fixture: ComponentFixture<TrailNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailNameListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
