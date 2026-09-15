import { TestBed } from '@angular/core/testing';
import { NeoWs } from './neo-ws';

describe('NeoWs', () => {
  let service: NeoWs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoWs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
