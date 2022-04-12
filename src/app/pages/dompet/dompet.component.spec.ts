import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DompetComponent } from './dompet.component';

describe('DompetComponent', () => {
  let component: DompetComponent;
  let fixture: ComponentFixture<DompetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DompetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DompetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
