import { combineReducers } from 'redux'

import users from './users';
import posts from './posts';
import login from './login';

const appReducer = combineReducers({ login, users, posts });

export default appReducer
