import { combineReducers } from 'redux'

import kind from './kind';
import posts from './posts';
import login from './login';
import allow from './allow';
import temple from './temple';
import device from './device';

const appReducer = combineReducers({ login, kind, posts, allow, temple, device });

export default appReducer
