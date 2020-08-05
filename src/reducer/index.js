import { combineReducers } from 'redux'

import users from './users';
import posts from './posts';
import login from './login';
import allow from './allow';
import home from './home';


const appReducer = combineReducers({ login, users, posts, home, allow });

export default appReducer
