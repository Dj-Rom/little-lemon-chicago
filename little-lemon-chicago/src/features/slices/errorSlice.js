import { createSlice } from '@reduxjs/toolkit';

function errorToggle(state, errorKey, action) {
  state[errorKey] = true;
  state.error = true;
  state.errorMessage = action.payload;
}

export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    error: false,
    errorMessage: '',
    errorBasket: false,
    errorHome: false,
    errorAbout: false,
    errorOrder: false,
    errorMenu: false,
    errorBooking: false,
    errorLogin: false,
    errorBoundary: false,
  },
  reducers: {
    setError: (state, action) => {
      const { errorType, message } = action.payload;

      switch (errorType) {
        case 'errorBoundary':
          errorToggle(state, 'errorBoundary', { payload: message });
          console.log('ddddd');

          break;
        case 'errorBasket':
          errorToggle(state, 'errorBasket', { payload: message });
          break;
        case 'errorHome':
          errorToggle(state, 'errorHome', { payload: message });
          break;
        case 'errorAbout':
          errorToggle(state, 'errorAbout', { payload: message });
          break;
        case 'errorOrder':
          errorToggle(state, 'errorOrder', { payload: message });
          break;
        case 'errorMenu':
          errorToggle(state, 'errorMenu', { payload: message });
          break;
        case 'errorBooking':
          errorToggle(state, 'errorBooking', { payload: message });
          break;
        case 'errorLogin':
          errorToggle(state, 'errorLogin', { payload: message });
          break;
        default:
          break;
      }
    },
    clearError: (state) => {
      return {
        ...state,
        error: false,
        errorMessage: '',
        errorBasket: false,
        errorHome: false,
        errorAbout: false,
        errorOrder: false,
        errorMenu: false,
        errorBooking: false,
        errorLogin: false,
      };
    },
  },
});

// Export actions
export const { setError, clearError } = errorSlice.actions;

// Selector
export const errorSelector = (state) => state.error;

export default errorSlice.reducer;
