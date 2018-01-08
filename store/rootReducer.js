import { combineReducers } from 'redux';
import { error, loading } from '../services/reducer';

export default combineReducers({
  error,
  loading
});