import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePet } from '../../actions/profile';

const Pets = ({ petinfo, deletePet }) => {
  const pets = petinfo.map(pet => (
    <tr key={pet._id}>
      <td>{pet.petname}</td>
      <td className='hide-sm'>{pet.animal}</td>
      <td className='hide-sm'>{pet.breed}</td>
      <td>
        <button onClick={() => deletePet(pet._id)} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Pet Information</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Pet</th>
            <th className='hide-sm'>Animal</th>
            <th className='hide-sm'>Breed</th>
            <th />
          </tr>
        </thead>
        <tbody>{pets}</tbody>
      </table>
    </Fragment>
  );
};

Pets.propTypes = {
  petinfo: PropTypes.array.isRequired,
  deletePet: PropTypes.func.isRequired
};

export default connect(null, { deletePet })(Pets);
