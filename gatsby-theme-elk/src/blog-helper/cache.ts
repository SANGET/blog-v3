export class SessionCache {
  storageKey: string;

  storageData = {}

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  getItem = (remark) => {
    const storage = sessionStorage.getItem(this.storageKey);
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
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.storageData));
  }
}
