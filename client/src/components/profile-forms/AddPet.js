import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPet } from '../../actions/profile';

const AddPet = ({ addPet, history }) => {
  const [formData, setFormData] = useState({
    petname: '',
    animal: '',
    breed: '',
    sex: '',
    desexed: '',
    microchipped: '',
    registered: '',
    rescuepet: '',
    age: '',
    vaccinations: '',
    allergies: '',
    healthconditions: '',
    medication: ''
  });
  const {
    petname,
    animal,
    breed,
    sex,
    desexed,
    microchipped,
    registered,
    rescuepet,
    age,
    vaccinations,
    allergies,
    healthconditions,
    medication
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h2 className='large text-primary'>
        <i className='fas fa-paw'></i>Pet Details
      </h2>
      <p className='lead'>Please complete all information below</p>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addPet(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='petname'
            value={petname}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Pet's Name</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='animal'
            value={animal}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Type of Animal</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='breed'
            value={breed}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>What is your pet's breed?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='sex'
            value={sex}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Pet's sex</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='age'
            value={age}
            required
            onChange={e => onChange(e)}
          />
          <small className='form-text'>How old is your pet?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='desexed'
            value={desexed}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Has your pet been desexed?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='microchipped'
            value={microchipped}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Is your pet microchipped?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='registered'
            value={registered}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Is your pet registered with the local council?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='rescuepet'
            value={rescuepet}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Is your pet a rescue pet?</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='vaccinations'
            value={vaccinations}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Are your pet's vaccinations up to date?
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='allergies'
            value={allergies}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Does your pet have any allergies? If so, please list.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='healthconditions'
            value={healthconditions}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Does your pet have any health conditions? If so, please list.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder=''
            name='medication'
            value={medication}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Is your pet on any medication? If so, please provide details.
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

AddPet.propTypes = {
  addPet: PropTypes.func.isRequired
};

export default connect(null, { addPet })(withRouter(AddPet));
