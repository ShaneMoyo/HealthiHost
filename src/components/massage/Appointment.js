import React, { Component } from 'react';
import { bookAppointment } from './actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import { Hero, HeroBody } from 'bloomer';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Login extends Component {
  state = {
    year: '2018',
    month: '01',
    day: '01',
    service: 'Massage',
    notes: '',
    time: '',
    bookedAppointment: false

  }

  onSubmit = () => {
    const { 
      year,
      month,
      day,
      service,
      notes,
      time
    } = this.state;

    const { 
      user,
      error,
      loading,
      bookAppointment 
    } = this.props;

    const appointment = {
      date: `${year}-${month}-${day}`,
      service,
      user: user._id,
      fulfilled: false,
      notes,
      time
    }
    console.log('appointment', appointment)
    bookAppointment(appointment);
    if(error === null && loading === false) this.setState({ bookedAppointment: true })
  }

  handleMonthChange = value => this.setState({ month: value });
  handleDayChange = value => this.setState({ day: value });
  handleNotesChange = value => this.setState({ notes: value });
  handleTimeChange = value => this.setState({ time: value });

  render(){
    const { month, day, notes, time } = this.state;
    const { error, user, appointments } = this.props;
    const monthOptions = [];
    const dayOptions = [];
    const times = [<option value={5}>5:00 PM</option>, <option value={6}>6:00 PM</option>, <option value={7}>7:00 PM</option>]
    const booked = appointments.bookedAppointment;

    for(let i = 1; i < 32; i++ ){
      dayOptions.push(<option value={i < 10 ? `0${i}` : i}>{i}</option>);
    }

    for(let i = 1; i < 13; i++ ){
      monthOptions.push(<option value={i < 10 ? `0${i}` : i}>{i}</option>);
    }

    console.log('dayss',dayOptions)
    let authError = error ? 'Authentication Failed' : null;
    /*eslint-disable*/ 
 

    return(
      <div> 
        <Hero isColor='info' >
          <Navigation/>
            <HeroBody>
              <div class="container has-text-centered">
                <div class="column is-8 is-offset-2">
                  <div class="box" >
                    <h3 class="title has-text-grey">{ booked ? 'Appointment Booked Succesfully' : 'Book an Appointment'}</h3>
                    <p class="subtitle has-text-grey">{ !booked ? 'Please fill out the required fields to proceed.' : null}</p>
                    <br/>
                    { !booked ?
                    <div>
                    <div class="field">
                      <div class="control">
                      
                        <label>Month</label>
                        <select onChange={({ target }) => this.handleMonthChange(target.value)} value={month} class="input is-small" name="month" autofocus="">
                          {monthOptions}
                        </select>
                        <label>Day</label>
                        <br/>
                        <select onChange={({ target }) => this.handleDayChange(target.value)} value={day} class="input is-small" name="day" autofocus="">
                          {dayOptions}
                        </select>
                        <label>Time</label>
                        <br/>
                        <select onChange={({ target }) => this.handleTimeChange(target.value)} value={time} class="input is-small" name="day" autofocus="">
                          {times}
                        </select>
                      </div>
                      
                    </div>

                    <div class="field">
                      <div class="control">
                        <input onChange={({ target }) => this.handleNotesChange(target.value)} value={notes} class="input is-large" name="notes" placeholder="Add a note"/>
                      </div>
                    </div>

                    <div class="field">
                      <div class="control has-text-centered">
                        <button onClick={() => this.onSubmit()} 
                          class={
                            this.props.loading ?
                            "button is-loading centered is-block is-info is-medium" :
                            "button centered is-block is-info is-medium"} 
                            type="button">
                            book
                        </button>
                      </div>
                    </div></div>: null }
                   {booked ? <NavBarLink exact to="/me/appointments">Proceed to my appointments</NavBarLink> : null }

                    {error &&
                    <div class="field">
                      <div class="button is-danger">{authError}</div>
                    </div>}
                    <hr/>
                  </div>
                </div>
              </div>
          </HeroBody>
        </Hero>
      </div>
    );
  }
}

export default connect(({ auth, loading, error, appointments }) => ({
  appointments,
  user: auth.user,
  error,
  loading

}),
{ bookAppointment }
)(Login);