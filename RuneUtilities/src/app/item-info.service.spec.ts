import { TestBed } from '@angular/core/testing';

import { ItemInfoService } from './item-info.service';

describe('ItemInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemInfoService = TestBed.get(ItemInfoService);
    expect(service).toBeTruthy();
  });
});
