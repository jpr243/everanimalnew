import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-pet' className='btn btn-light'>
        <i className='fas fa-paw text-primary'></i> Add Pet Details
      </Link>
      <Link to='/create-booking' className='btn btn-light'>
        <i className='fas fa-suitcase text-primary'></i>Add Booking Details
      </Link>
    </div>
  );
};

export default DashboardActions;
