import { combineReducers } from 'redux'

import kind from './kind';
import posts from './posts';
import login from './login';
import allow from './allow';
import home from './home';
import temple from './temple';
import device from './device';

const appReducer = combineReducers({ login, kind, posts, home, allow, temple, device });

export default appReducer
