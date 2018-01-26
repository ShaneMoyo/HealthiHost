import { combineReducers } from 'redux';
import { error, loading } from '../services/reducer';
import auth from '../components/auth/reducer';
import appointments from '../components/massage/reducer'

export default combineReducers({
  auth,
  error,
  loading,
  appointments
});