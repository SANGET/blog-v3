export class SessionCache {
  storageKey: string;

  storageData = {}

  Storage = window.sessionStorage

  constructor(storageKey: string, useLocalStoage = false) {
    this.storageKey = storageKey;
    if (useLocalStoage) {
      this.Storage = localStorage;
    }
  }

  getItem = (remark) => {
    const storage = this.Storage.getItem(this.storageKey);
    let storageObj;
    let res;
    if (storage) {
      try {
        storageObj = JSON.parse(storage);
        res = storageObj[remark];
      } catch (e) {
        console.log(e);
      }
    }
    return res;
  }

  setItem = (remark, data) => {
    this.storageData[remark] = data;
    this.Storage.setItem(this.storageKey, JSON.stringify(this.storageData));
  }
}
