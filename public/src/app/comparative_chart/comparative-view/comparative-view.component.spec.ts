import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativeViewComponent } from './comparative-view.component';

describe('ComparativeViewComponent', () => {
  let component: ComparativeViewComponent;
  let fixture: ComponentFixture<ComparativeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
