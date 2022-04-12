import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaridokterComponent } from './caridokter.component';

describe('CaridokterComponent', () => {
  let component: CaridokterComponent;
  let fixture: ComponentFixture<CaridokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaridokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaridokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
