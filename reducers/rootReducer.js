import {combineReducers} from 'redux';

import {authenticationReducer} from '../reducers/authenticationReducer';

export const rootReducer = combineReducers({
  authenticationReducer
});
