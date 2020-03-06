import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Spinner from '../layout/Spinner';
import { getBookingById } from '../../actions/booking';
//import BookingItem from './BookingItem';

const Booking = ({
  getBookingById,
  booking: { booking, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getBookingById(match.params.id);
  }, [getBookingById]);
  return (
    <Fragment>
      <div>booking</div>
    </Fragment>
  );
};

Bookings.propTypes = {
  getBookingById: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking,
  auth: state.auth
});

export default connect(mapStateToProps, { getBookingById })(Booking);
