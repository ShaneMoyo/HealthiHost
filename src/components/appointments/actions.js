import * as actions from './constants';
import appointmentApi from '../../services/appointmentApi';

export function loadMyAppointments(){
  return dispatch => {
    dispatch({
      type: actions.LOAD_APPOINTMENTS,
      payload: appointmentApi.getMy()
    });
  };
}