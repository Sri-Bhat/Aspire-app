export default class DataHandlers {
  // To get nested data from Objects:
  // IMPORT to use NULL handling and avoiding CRASH in App
  static get = (obj, key) => {
    return key.split('.').reduce((o, x) => {
      return typeof o == 'undefined' || o === null ? o : o[x];
    }, obj);
  };

  // To get array of Card number to display in seperate section
  static getCardNumberArray = value => {
    const set1 = value.substring(0, 4);
    const set2 = value.substring(4, 8);
    const set3 = value.substring(8, 12);
    const set4 = value.substring(12, 16);
    return [set1, set2, set3, set4];
  };

  // This is to validate amount field:
  // This validation takes: only 2 decimal points & Wont allow any other characters(TAKES ONLY FLOATING NUMBERS)
  static ValidateFloating = val => {
    if (/^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/.test(val)) return true;
    return false;
  };

  // The string value of currency gets displayed with comma separated
  static numberWithCommas = x => {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  };
}
