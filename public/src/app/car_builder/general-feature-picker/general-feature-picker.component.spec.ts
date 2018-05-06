import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFeaturePickerComponent } from './general-feature-picker.component';

describe('GeneralFeaturePickerComponent', () => {
  let component: GeneralFeaturePickerComponent;
  let fixture: ComponentFixture<GeneralFeaturePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralFeaturePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFeaturePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
