import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BookingItem = ({
  profile: {
    user: { _id, name },
    datefrom,
    dateto
  }
}) => {
  return (
    <div className='profile bg-light'>
      
      <div>
        <h2>{name}</h2>
        <p>{datefrom && <span> to {dateto}</span>}</p>

        <Link to={`/booking/${_id}`} className='btn btn-primary'>
          View Booking
        </Link>
      </div>
      </div>
      );
  }


BookingItem.propTypes = {
  booking: PropTypes.object.isRequired
};

export default BookingItem;
