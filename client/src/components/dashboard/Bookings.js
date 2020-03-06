import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/booking';

const Bookings = ({ bookinginfo, deleteBooking }) => {
  const bookings = bookinginfo.map(book => (
    <tr key={book._id}>
      <td>
        <Moment format='YYYY/MM/DD'>{book.from}</Moment>
      </td>
      <td>
        <Moment format='YYYY/MM/DD'>{book.to}</Moment>
      </td>
      <td>
        <button
          onClick={() => deleteBooking(book._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <br />
      <br/>
      <h2 className='my-2'>Booking Information</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th />
          </tr>
        </thead>
        <tbody>{bookings}</tbody>
      </table>
    </Fragment>
  );
};

Bookings.propTypes = {
  bookinginfo: PropTypes.array.isRequired,
  deleteBooking: PropTypes.func.isRequired
};

export default connect(null, { deleteBooking })(Bookings);
