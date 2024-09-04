import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  email: '',
  tel: '',
  occasion: '',
  date: '',
  time: '',
  guests: '',
}
export const pageBookingSlice = createSlice({
  name: 'page_booking',
  initialState: initialState,
  reducers: {
    changeBookingInputValue: (state, action) => {
      const [key] = Object.keys(action.payload)
      const value = action.payload[key]
      state[key] = value
    },
    resetBookingInputValue: (state) => {
      state.email = initialState.email
      state.tel = initialState.tel
      state.occasion = initialState.occasion
      state.date = initialState.date
      state.time = initialState.time
      state.guests = initialState.guests
    },
  },
})

export const { changeBookingInputValue, resetBookingInputValue } =
  pageBookingSlice.actions
export const bookingSelector = (state) => state.page_booking

export default pageBookingSlice.reducer
