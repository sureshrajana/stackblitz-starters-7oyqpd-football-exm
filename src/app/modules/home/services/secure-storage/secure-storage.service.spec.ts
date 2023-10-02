import { TestBed } from '@angular/core/testing';

import { SecureStorageService } from './secure-storage.service';

describe('SecureStorageService', () => {
  let service: SecureStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SecureStorageService ]
    });
    service = TestBed.inject(SecureStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    const spy = spyOn(localStorage, 'getItem');
    const key = 'fakeKey';
    service.getData(key);
    expect(spy).toHaveBeenCalled();
  });

  it('should set data', () => {
    const spy = spyOn(localStorage, 'setItem');
    const key = 'fakeKey';
    const value = 'fakeValue';
    service.saveData(key, value);
    expect(spy).toHaveBeenCalled();
  });

  it('should remove data', () => {
    const spy = spyOn(localStorage, 'removeItem');
    const key = 'fakeKey';
    service.removeData(key);
    expect(spy).toHaveBeenCalled();
  });

  it('should clear data', () => {
    const spy = spyOn(localStorage, 'clear');
    service.clearData();
    expect(spy).toHaveBeenCalled();
  });
});
