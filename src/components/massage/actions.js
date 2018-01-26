import * as actions from './constants';
import appointmentApi from '../../services/appointmentApi';

export function bookAppointment(appointment){
  return dispatch => {
    dispatch({ type: actions.LOADING })
    return appointmentApi.book(appointment)
      .then( bookedAppointment => dispatch({type: actions.BOOKED_APPOINTMENT, payload: bookedAppointment}))
      .then(() => dispatch({ type: actions.DONE_LOADING}))
      .catch(error => dispatch({ type: actions.ERROR , payload: error }));
  }
}