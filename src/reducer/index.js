import { combineReducers } from 'redux'

import users from './users';
import posts from './posts';

const appReducer = combineReducers({ users, posts });

export default appReducer
