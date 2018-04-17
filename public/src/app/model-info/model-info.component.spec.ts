import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInfoComponent } from './model-info.component';

describe('ModelInfoComponent', () => {
  let component: ModelInfoComponent;
  let fixture: ComponentFixture<ModelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
