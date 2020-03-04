import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing'>
      <div className='container'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-large text-primary'>Everanimal</h1>
            <p className='lead text-dark'>
              Trust us to care for your beloved pets and home
            </p>
            < br />
            <p className='text-dark'>
              Going away? Enjoy your holiday worry free knowing your home and pets are safe!
            </p>
            <br />
            <br />
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Join Now
              </Link>
              <Link to='/login' className='btn btn-light'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
