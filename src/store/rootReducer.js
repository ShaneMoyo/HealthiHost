import { combineReducers } from 'redux';
import { error, loading } from '../services/reducer';
import auth from '../components/auth/reducer';

export default combineReducers({
  auth,
  error,
  loading
});