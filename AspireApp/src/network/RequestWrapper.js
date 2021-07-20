import DataHandlers from '../utils/datahandlers';
import {AspireNetWorkInstance} from './axios';

/**
 * Request Wrapper with default success/error actions
 * This is commmon service file for any API calls:
 * onSuccess and inFailure will be recieved and callback can based on API responce
 * those call backs gets excecuted
 */

export const ApiRequest = async function (options) {
  const onSuccess = function (response) {
    console.log('Request Successful!', response);
    const data = DataHandlers.get(response, 'data');
    let isValidResponse =
      response && response.status && response.status === 200;
    if (isValidResponse) {
      return Promise.resolve(data);
    } else {
      return Promise.reject({});
    }
  };

  const onError = function (error) {
    return Promise.reject(error);
  };

  try {
    const response = await AspireNetWorkInstance(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};
