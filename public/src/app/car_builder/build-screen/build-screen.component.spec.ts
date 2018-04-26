import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildScreenComponent } from './build-screen.component';

describe('BuildScreenComponent', () => {
  let component: BuildScreenComponent;
  let fixture: ComponentFixture<BuildScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
