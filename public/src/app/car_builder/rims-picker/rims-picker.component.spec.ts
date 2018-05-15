import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RimsPickerComponent } from './rims-picker.component';

describe('RimsPickerComponent', () => {
  let component: RimsPickerComponent;
  let fixture: ComponentFixture<RimsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RimsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RimsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
