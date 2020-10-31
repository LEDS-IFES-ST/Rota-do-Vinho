import { TestBed } from '@angular/core/testing';

import { VinicolaService } from './vinicola.service';

describe('VinicolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinicolaService = TestBed.get(VinicolaService);
    expect(service).toBeTruthy();
  });
});
