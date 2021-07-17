import createReducer from './config';
import * as Types from '../Types';

export const debitcardDetails = createReducer('en', {
  [Types.APP_MODE](state, action) {
    return action.appMode;
  },
});
