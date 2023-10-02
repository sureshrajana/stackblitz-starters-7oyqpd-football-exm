export class SecureStorageServiceMock {
  saveData(): void {
    //empty method
  }

  getData(key: string): string {
    return `${key}}`;
  }

  removeData(): void {
    //empty method
  }

  clearData(): void {
    //empty method
  }
}
