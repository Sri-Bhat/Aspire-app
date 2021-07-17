import * as Types from '../Types';

export const saveDebitCardDetails = appMode => {
  return {
    type: Types.APP_MODE,
    appMode,
  };
};
