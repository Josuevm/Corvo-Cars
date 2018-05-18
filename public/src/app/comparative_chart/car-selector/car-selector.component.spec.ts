import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSelectorComponent } from './car-selector.component';

describe('CarSelectorComponent', () => {
  let component: CarSelectorComponent;
  let fixture: ComponentFixture<CarSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
