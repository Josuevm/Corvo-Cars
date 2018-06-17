import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSelectorTouchComponent } from './car-selector-touch.component';

describe('CarSelectorTouchComponent', () => {
  let component: CarSelectorTouchComponent;
  let fixture: ComponentFixture<CarSelectorTouchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSelectorTouchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSelectorTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
