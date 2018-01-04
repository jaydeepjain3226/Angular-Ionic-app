import { SearchService } from './search.service';
import { TestBed, inject } from '@angular/core/testing';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Search.ServiceService]
    });
  });

  it('should be created', inject([Search.ServiceService], (service: Search.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
