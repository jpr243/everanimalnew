import axios from 'axios';
import { setAlert } from './alert';

import { CREATE_BOOKING, BOOKING_ERROR, UPDATE_BOOKING } from './types';

//Create booking
export const createBooking = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    const res = await axios.post('/api/booking', formData, config);
    dispatch({
      type: CREATE_BOOKING,
      payload: res.data
    });

    dispatch(setAlert('Booking Created', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Delete a booking
export const deleteBooking = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/booking/${id}`);

    dispatch({
      type: UPDATE_BOOKING,
      payload: res.data
    });
    dispatch(setAlert('Booking Removed', 'success'));
  } catch (err) {
    dispatch({
      type: BOOKING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
