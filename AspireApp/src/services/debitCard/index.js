import {ApiRequest} from '../../network';
const networkConfig = require('../../network/config.json');

export class DebitCardServices {
  static getDebitCardsInfo = (onSuccess, onError) => {
    ApiRequest({
      url: networkConfig.debitCard,
      method: networkConfig.methods.get,
    })
      .then(response => {
        const data = response && response.data;
        onSuccess && onSuccess(data);
      })
      .catch(error => {
        console.log('Error::', error);
        onError && onError(error);
      });
  };
}
