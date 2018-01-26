import * as actions from './constants';

export default function appointments(state = { appointments: [], bookedAppointment: false }, { type, payload }) {
  switch(type) {
    // case DROPSITES_LOAD: 
    //   return payload;
    case actions.BOOKED_APPOINTMENT:
      return {
        bookedAppointment: true,
        appointments: [
        ...state.appointments,
        payload
      ]
    }
    
    // case DROPSITE_DELETE:
    //   return state.filter(dropSite => dropSite._id !== payload);
    // case DROPSITE_UPDATE:
    //   return state.map(dropSite => dropSite._id === payload._id ? { ...dropSite, ...payload } : dropSite);
    // case LOGOUT: 
    //   return [];
    default:
      return state;
  } 
}  