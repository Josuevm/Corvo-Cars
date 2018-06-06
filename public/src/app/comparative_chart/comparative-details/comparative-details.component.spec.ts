import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeDetailsComponent } from './comparative-details.component';

describe('ComparativeDetailsComponent', () => {
  let component: ComparativeDetailsComponent;
  let fixture: ComponentFixture<ComparativeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
