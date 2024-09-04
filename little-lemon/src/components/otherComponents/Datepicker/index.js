import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Calendar from '../Calendar/index'
import * as Styled from './styles'
import { getDateISO } from '../../../helpers/calendar'
import { changeBookingInputValue } from '../../../features/slices/pageBookingSlice'
import { useDispatch } from 'react-redux'
import { formatDate } from '../../../helpers/utils/formatDate'

const Datepicker = ({ label, value, onDateChanged, tabIndex = 0 }) => {
  const dispatch = useDispatch()
  const [dateState, setDateState] = useState(
    value ? getDateISO(new Date(value)) : ''
  )
  const [calendarOpen, setCalendarOpen] = useState(false)

  // Toggle calendar visibility
  const toggleCalendar = () => setCalendarOpen((prevState) => !prevState)

  // Handle date change from calendar
  const handleDateChange = (date) => {
    const newDate = date ? getDateISO(date) : ''
    if (newDate !== dateState) {
      setDateState(newDate)
      if (onDateChanged) {
        onDateChanged(newDate)
      }
      dispatch(changeBookingInputValue({ date: formatDate(new Date(newDate)) }))
    }
    closeCalendar()
  }

  // Close calendar
  const closeCalendar = () => setCalendarOpen(false)

  // Effect to initialize date if value prop changes
  useEffect(() => {
    if (value) {
      setDateState(getDateISO(new Date(value)))
    }
  }, [value])

  return (
    <Styled.DatePickerContainer>
      <Styled.DatePickerFormGroup>
        {label && <label>{label}</label>}
        <Styled.DatePickerInput
          type="input"
          tabIndex={0}
          value={dateState ? dateState.split('-').join(' / ') : ''}
          onChange={(evt) => evt.preventDefault()}
          readOnly
          placeholder="YYYY / MM / DD"
          onKeyDown={(e) => e.key === 'Enter' && toggleCalendar()}
          onClick={toggleCalendar} // Open calendar on input click
        />
      </Styled.DatePickerFormGroup>
      <Styled.DatePickerDropdown isOpen={calendarOpen} toggle={toggleCalendar}>
        <Styled.DatePickerDropdownToggle color="transparent" />
        <Styled.DatePickerDropdownMenu>
          {calendarOpen && (
            <div>
              <Calendar
                date={dateState ? new Date(dateState) : new Date()}
                onDateChanged={handleDateChange}
                closeCalendar={closeCalendar}
              />
            </div>
          )}
        </Styled.DatePickerDropdownMenu>
      </Styled.DatePickerDropdown>
    </Styled.DatePickerContainer>
  )
}

Datepicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onDateChanged: PropTypes.func,
}

export default Datepicker
