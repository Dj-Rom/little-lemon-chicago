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
import { useDispatch, useSelector } from 'react-redux';
import { bookingSelector } from '../../../features/slices/pageBookingSlice';

 export default function TimePicker({ selectedTime, placeholder, onTimeChanged }) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(selectedTime || '');
const bookingSel = useSelector(bookingSelector);
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
                    {bookingSel.freeTimeForReservation.map((time) => (
                        <TimePickerDropdownItem
                            key={time}
                            onClick={() => {
                                 handleTimeClick(time);
                                toggleOpen();
                            }}
                            title={time}
                        >
                           {time}
                        </TimePickerDropdownItem>
                    ))}
                </TimePickerDropdownMenu>
            </TimePickerDropdown>
        </TimePickerContainer>
    );
}

TimePicker.propTypes = {
    selectedTime: PropTypes.string,
    placeholder: PropTypes.string,
    onTimeChanged: PropTypes.func.isRequired,
};

