export default class DataHandlers {
  // To get nested data from Objects:
  static get = (obj, key) => {
    return key.split('.').reduce((o, x) => {
      return typeof o == 'undefined' || o === null ? o : o[x];
    }, obj);
  };

  static getCardNumberArray = value => {
    const set1 = value.substring(0, 4);
    const set2 = value.substring(4, 8);
    const set3 = value.substring(8, 12);
    const set4 = value.substring(12, 16);
    return [set1, set2, set3, set4];
  };
}
