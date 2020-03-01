import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    address: '',
    suburb: '',
    phone: '',
    emergencycontact: '',
    relationship: '',
    emergencyphone: '',
    emergencyemail: '',
    vetname: '',
    vetaddress: '',
    vetsuburb: '',
    vetphone: ''
  });
  const {
    address,
    suburb,
    phone,
    emergencycontact,
    relationship,
    emergencyphone,
    emergencyemail,
    vetname,
    vetaddress,
    vetsuburb,
    vetphone
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <section className='container'>
        <p className='lead'>Please complete all information below</p>
        <h2 className='large text-primary'>
          <i className='fas fa-address-card'></i>Contact Details
        </h2>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Address'
              name='address'
              value={address}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Suburb'
              name='suburb'
              value={suburb}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Phone'
              name='phone'
              value={phone}
              required
              onChange={e => onChange(e)}
             
            />
          </div>
          <br />
          <h2 className='large text-primary'>
            <i className='fas fa-phone-square'></i>Emergency Contact
          </h2>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name of Emergency Contact'
              name='emergencycontact'
              value={emergencycontact}
              required
              onChange={e => onChange(e)}
             
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Relationship to Emergency Contact'
              name='relationship'
              value={relationship}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Emergency Contact Mobile No. '
              name='emergencyphone'
              value={emergencyphone}
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Emergency Contact Email'
              name='emergencyemail'
              value={emergencyemail}
              onChange={e => onChange(e)}
            />
          </div>
          <br />
          <h2 className='large text-primary'>
            <i className='fas fa-clinic-medical'></i>Vet Details
          </h2>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name of Vet Surgery'
              name='vetname'
              value={vetname}
              required
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Address of Vet Surgery'
              name='vetaddress'
              value={vetaddress}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Suburb'
              name='vetsuburb'
              value={vetsuburb}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Contact No. for Vet Surgery'
              name='vetphone'
              value={vetphone}
              required
              onChange={e => onChange(e)}
            />
          </div>

          <br />
          <input type='submit' className='btn btn-primary my-1' />
          <Link className='btn btn-light my-1' to='/dashboard'>
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
