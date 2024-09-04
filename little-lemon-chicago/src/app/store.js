import { configureStore } from '@reduxjs/toolkit';
import pageViewSlice from '../features/slices/pageViewSlice';
import pageBookingSlice from '../features/slices/pageBookingSlice';
import pageOrderOnlineSlice from '../features/slices/pageOrderOnlineSlice';
import errorSlice from '../features/slices/errorSlice';

export default configureStore({
  reducer: {
    page_view: pageViewSlice,
    page_booking: pageBookingSlice,
    error: errorSlice,
    page_order_online: pageOrderOnlineSlice,
  },
});
