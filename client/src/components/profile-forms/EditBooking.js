import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBooking, getCurrentBooking } from '../../actions/booking';

const initialState = {
  datefrom: '',
  departuretime: '',
  sitterarrive: '',
  dateto: '',
  returntime: '',
  sitterleave: '',
  keysleft: '',
  money: ''
};

const EditBooking = ({
  booking: { booking, loading },
  createBooking,
  getCurrentBooking,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!booking) getCurrentBooking();
    if (!loading) {
      const bookingData = { ...initialState };
      for (const key in booking) {
        if (key in bookingData) bookingData[key] = booking[key];
      }
      setFormData(bookingData);
    }
  }, [loading, getCurrentBooking, booking]);

  const {
    datefrom,
    departuretime,
    sitterarrive,
    dateto,
    returntime,
    sitterleave,
    keysleft,
    money
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createBooking(formData, history);
  };

  return (
    <Fragment>
      <h2 className='large text-primary'>
        <i className='fas fa-suitcase'></i>Booking Details
      </h2>
      <p className='lead'>Please update relevant information below</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='date'
            placeholder=''
            name='datefrom'
            value={datefrom}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Departure Date</small>
        </div>
        <div className='form-group'>
          <input
            type='time'
            placeholder=''
            name='departuretime'
            value={departuretime}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            What time will you be leaving home?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='time'
            placeholder=''
            name='sitterarrive'
            value={sitterarrive}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            What time should the sitter arrive at your home?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder=''
            name='dateto'
            value={dateto}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Return Date</small>
        </div>
        <div className='form-group'>
          <input
            type='time'
            placeholder=''
            name='returntime'
            value={returntime}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>What time do you arrive back?</small>
        </div>
        <div className='form-group'>
          <input
            type='time'
            placeholder=''
            name='sitterleave'
            value={sitterleave}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            What time should the sitter leave your home?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='keysleft'
            value={keysleft}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Where should the sitter leave the house keys?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='money'
            value={money}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            How much money will you leave for incidentals?
          </small>
        </div>

        <br />
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditBooking.propTypes = {
  createBooking: PropTypes.func.isRequired,
  getCurrentBooking: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking
});

export default connect(mapStateToProps, { createBooking, getCurrentBooking })(
  withRouter(EditBooking)
);
