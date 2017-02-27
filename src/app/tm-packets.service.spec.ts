/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TmPacketsService } from './tm-packets.service';

describe('TmPacketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmPacketsService]
    });
  });

  it('should ...', inject([TmPacketsService], (service: TmPacketsService) => {
    expect(service).toBeTruthy();
  }));
});
