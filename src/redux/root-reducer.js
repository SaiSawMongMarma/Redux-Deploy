// this reducer end up being code that combine all of others state together.
//userReducer-store the state current user.
//

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});