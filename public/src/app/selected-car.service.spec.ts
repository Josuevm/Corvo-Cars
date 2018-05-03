import { TestBed, inject } from '@angular/core/testing';

import { SelectedCarService } from './selected-car.service';

describe('SelectedCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedCarService]
    });
  });

  it('should be created', inject([SelectedCarService], (service: SelectedCarService) => {
    expect(service).toBeTruthy();
  }));
});
