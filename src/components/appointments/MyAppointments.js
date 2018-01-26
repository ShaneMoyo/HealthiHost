import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import { loadMyAppointments } from '../'

class MyAppointments extends Component {
  componentDidMount() {
    this.props.loadMyAppointments();
  }
  render() {
    const { appointments } = this.props;
    const appointmentList = appointments.map(appointment => {
      return <div>{appointment.service}</div>;
    })
    return(
      <div><p> HELLO APPOINTMENTS</p> 
      {appointmentList}
      </div>
    );
  }
}

export default MyAppointments;