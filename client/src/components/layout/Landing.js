import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl';
import cat from '../../img/cat.jpg';
import dog from '../../img/dog.jpg';
import bird from '../../img/bird.jpg';
import house from '../../img/house.jpg';

export const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div style={{ width: '100%', margin: 'auto', height: '1-' }}>
      <Grid className='landing-grid'>
        <Cell col={12}>
          <img className='pet-img' src={dog} alt='dog' />
          <img className='pet-img' src={cat} alt='cat' />
          <img className='pet-img' src={bird} alt='bird' />
          <div className='banner-text'>
            <h1>Everanimal</h1>
          </div>
          <br />
        </Cell>
        <Cell col={12}>
          <p className='text-minor px-4'>
            Trust us to care for your beloved pets and home
          </p>
        </Cell>
        <br />
        <Cell col={12}>
          <img className='sq-img' src={house} alt='house' />
          <h5>
            Going away? Enjoy your holiday worry free knowing your pets and home
            are safe!
          </h5>
        </Cell>

        <div className='buttons'>
          <Link to='/register' className='btn btn-primary'>
            Join Now
          </Link>
          <Link to='/login' className='btn btn-light'>
            Login
          </Link>
          <br />
          <p className='copyright'>&copy; 2020 Everanimal</p>
        </div>
      </Grid>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
