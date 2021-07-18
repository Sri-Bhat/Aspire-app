import * as Types from '../Types';

export const saveDebitCardDetails = debitCard => {
  return {
    type: Types.DEBIT_CARD,
    debitCard,
  };
};
