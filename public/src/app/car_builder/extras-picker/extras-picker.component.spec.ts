import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrasPickerComponent } from './extras-picker.component';

describe('ExtrasPickerComponent', () => {
  let component: ExtrasPickerComponent;
  let fixture: ComponentFixture<ExtrasPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrasPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrasPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
