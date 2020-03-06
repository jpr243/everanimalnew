import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentBooking } from '../../actions/booking';
import BookingItem from './BookingItem';

const Bookings = ({ getCurrentBooking, booking: { booking, loading } }) => {
  useEffect(() => {
    getCurrentBooking();
  });

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Bookings</h1>
          <p className='lead'></p>
          <div className='bookings'>
            {booking.length > 0 ? (
              booking.map(booking => (
                <BookingItem key={booking._id} booking={booking} />
              ))
            ) : (
              <h4>No bookings found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Bookings.propTypes = {
  getCurrentBooking: PropTypes.func.isRequired,
  booking: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  booking: state.booking,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentBooking })(Bookings);
