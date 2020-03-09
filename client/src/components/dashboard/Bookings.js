import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteBooking } from '../../actions/profile';

const Bookings = ({ bookinginfo, deleteBooking }) => {
  const bookings = bookinginfo.map(book => (
    <tr style={{ width: '100%', margin: 'auto' }} key={book._id}>
      <td style={{ width: '25%' }}>
        <Moment format='DD/MM/YYYY'>{moment.utc(book.from)}</Moment>
      </td>
      <td style={{ width: '25%' }}>
        <Moment format='DD/MM/YYYY'>{moment.utc(book.to)}</Moment>
      </td>
      <td style={{ width: '25%' }}></td>
      <td style={{ width: '25%' }}>
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
      <br />
      <h2 className='my-2'>Booking Information</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>From</th>
            <th>
              <span></span>
            </th>
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
