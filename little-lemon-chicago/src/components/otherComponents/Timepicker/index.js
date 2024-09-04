import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  TimePickerContainer,
  TimePickerDropdown,
  TimePickerDropdownItem,
  TimePickerDropdownMenu,
  TimePickerDropdownToggle,
  TimePickerInput,
} from './styles'; // Ensure this path is correct
import { changeBookingInputValue } from '../../../features/slices/pageBookingSlice';
import { useDispatch } from 'react-redux';

const BOOKING_TIME = [
  { time: '13:00', booked: false },
  { time: '13:30', booked: false },
  { time: '14:00', booked: true },
  { time: '14:30', booked: false },
  { time: '15:00', booked: false },
  { time: '15:30', booked: false },
  { time: '16:00', booked: false },
  { time: '16:30', booked: true },
  { time: '17:00', booked: false },
  { time: '17:30', booked: false },
  { time: '18:00', booked: false },
  { time: '18:30', booked: false },
  { time: '19:00', booked: false },
  { time: '19:30', booked: false },
  { time: '20:00', booked: true },
  { time: '20:30', booked: false },
  { time: '21:00', booked: false },
  { time: '21:30', booked: false },
];

export default function TimePicker({ selectedTime, placeholder, onTimeChanged }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedTime || '');

  // Toggle dropdown visibility
  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Handle time selection
  const handleTimeClick = useCallback(
    (time) => {
      dispatch(changeBookingInputValue({ time: time }));

      setSelected(time); // Update local state
      if (typeof onTimeChanged === 'function') {
        onTimeChanged(time); // Notify parent component
        setIsOpen(false);
      } else {
        console.error('onTimeChanged is not a function');
      }
    },
    [onTimeChanged, dispatch],
  );

  return (
    <TimePickerContainer>
      <TimePickerInput
        type="text"
        value={selected} // Ensure this reflects the selected time
        placeholder={placeholder}
        readOnly
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleOpen()}
        onClick={() => toggleOpen()} // Open dropdown on input click
      />
      <TimePickerDropdown isOpen={isOpen} toggle={toggleOpen}>
        <TimePickerDropdownToggle caret style={{ display: 'none' }} />
        <TimePickerDropdownMenu>
          {BOOKING_TIME.map((time) => (
            <TimePickerDropdownItem
              key={time.time}
              onClick={() => {
                !time.booked && handleTimeClick(time.time);
                toggleOpen();
              }}
              disabled={time.booked} // Disable if booked
              title={time.booked ? 'Not available for booking' : 'Available for booking'} // Tooltip
            >
              {time.time}
            </TimePickerDropdownItem>
          ))}
        </TimePickerDropdownMenu>
      </TimePickerDropdown>
    </TimePickerContainer>
  );
}

TimePicker.propTypes = {
  selectedTime: PropTypes.string,
  onTimeChanged: PropTypes.func.isRequired,
};
