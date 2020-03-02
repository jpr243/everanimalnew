import {
  CREATE_BOOKING,
  BOOKING_ERROR,
  CLEAR_BOOKING,
} from '../actions/types';

const initialState = {
  booking: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_BOOKING:
      return {
        ...state,
        booking: payload,
        loading: false
      };
    case BOOKING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_BOOKING:
      return {
        ...state,
        booking: null,
        loading: false
      };
    default:
      return state;
  }
}
