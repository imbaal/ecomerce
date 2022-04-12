import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesialisComponent } from './spesialis.component';

describe('SpesialisComponent', () => {
  let component: SpesialisComponent;
  let fixture: ComponentFixture<SpesialisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpesialisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesialisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
