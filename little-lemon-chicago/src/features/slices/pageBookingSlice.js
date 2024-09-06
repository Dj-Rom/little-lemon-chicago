import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  freeTimeForReservation: ["Please select a date first"],
  email: '',
  tel: '',
  occasion: '',
  date: '',
  time: '',
  guests: '',
};

const pageBookingSlice = createSlice({
  name: 'page_booking',
  initialState,
  reducers: {
    changeBookingInputValue: (state, action) => {
      const [key] = Object.keys(action.payload);
      const value = action.payload[key];
      if (key in state) {
        state[key] = value;
      }
    },
    setFreeTimeForReservation: (state, action) => {
      state.freeTimeForReservation = action.payload;
    },
    resetBookingInputValue: () => {
      return { ...initialState };
    },
  },
});

export const { changeBookingInputValue, setFreeTimeForReservation, resetBookingInputValue } = pageBookingSlice.actions;

export const bookingSelector = (state) => state.page_booking;

export default pageBookingSlice.reducer;
