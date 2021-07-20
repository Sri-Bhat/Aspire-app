import {ApiRequest} from '../../network';
const networkConfig = require('../../network/config.json');

// Service file for Debitcard sections
/*
 * All API calls which is related to debit card sections
 *  can be added here(For now, Its one one API: Mock API)
 */
export class DebitCardServices {
  static getDebitCardsInfo = (onSuccess, onError) => {
    ApiRequest({
      url: networkConfig.debitCard,
      method: networkConfig.methods.get,
    })
      .then(data => {
        onSuccess && onSuccess(data);
      })
      .catch(error => {
        console.log('Error::', error);
        onError && onError(error);
      });
  };
}
