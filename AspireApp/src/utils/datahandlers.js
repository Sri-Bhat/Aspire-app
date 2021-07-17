export default class DataHandlers {
  // To get nested data from Objects:
  static get = (obj, key) => {
    return key.split('.').reduce((o, x) => {
      return typeof o == 'undefined' || o === null ? o : o[x];
    }, obj);
  };
}
