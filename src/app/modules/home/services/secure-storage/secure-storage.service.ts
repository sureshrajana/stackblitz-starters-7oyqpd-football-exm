import { Injectable } from '@angular/core';
import { SecureStorageServiceModule } from './secure-storage.service.module';


@Injectable({
  providedIn: SecureStorageServiceModule
})
export class SecureStorageService {

  saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getData(key: string): string {
    const data = localStorage.getItem(key)|| '';
    return data;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clearData(): void {
    localStorage.clear();
  }
  
  // private encrypt(txt: string): string {
  //   return CryptoJS.AES.encrypt(txt, environment.aesKey).toString();
  // }

  // private decrypt(txtToDecrypt: string) {
  //   return CryptoJS.AES.decrypt(txtToDecrypt, environment.aesKey).toString(CryptoJS.enc.Utf8);
  // }
}
