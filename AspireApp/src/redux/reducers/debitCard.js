import createReducer from './config';
import * as Types from '../Types';

export const saveDebitCardDetails = createReducer('en', {
  [Types.DEBIT_CARD](state, action) {
    return action.debitCard;
  },
});
