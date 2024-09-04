import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import calendar, {
  CALENDAR_MONTHS,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  isDate,
  isSameDay,
  isSameMonth,
  WEEK_DAYS,
} from '../../../helpers/calendar';
import { useDispatch } from 'react-redux';
import { changeBookingInputValue } from '../../../features/slices/pageBookingSlice';

export default function Calendar({ date, onDateChanged, closeCalendar }) {
  const dispatch = useDispatch();
  const [dateState, setDateState] = useState({
    current: new Date(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const [today] = useState(new Date());

  useEffect(() => {
    updateDateState(date);
  }, [date]);

  const updateDateState = (date) => {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
      current: isDateObject ? date : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    });
  };

  const getCalendarDates = useCallback(() => {
    const { current, month, year } = dateState;
    const calendarMonth = month || +current?.getMonth() + 1;
    const calendarYear = year || current?.getFullYear();
    return calendar(calendarMonth, calendarYear);
  }, [dateState]);

  const renderMonthAndYear = () => {
    const { month, year } = dateState;
    // Debugging: Ensure month and year are defined and valid
    if (typeof month === 'undefined' || typeof year === 'undefined') {
      console.error('Month or year is undefined in renderMonthAndYear');
      return null;
    }
    const monthName = CALENDAR_MONTHS[Object.keys(CALENDAR_MONTHS)[month - 1]] || 'Invalid Month';
    return (
      <Styled.CalendarHeader>
        <Styled.ArrowLeft onClick={handlePreviousMonth} title="Previous Month" tabIndex={0} />
        <Styled.CalendarMonth>
          {monthName} {year}
        </Styled.CalendarMonth>
        <Styled.ArrowRight onClick={handleNextMonth} tabIndex={0} title="Next Month" />
      </Styled.CalendarHeader>
    );
  };

  const renderDayLabel = (day, index) => {
    const dayLabel = WEEK_DAYS[day]?.toUpperCase() || 'Invalid Day';
    return (
      <Styled.CalendarDay tabIndex={0} key={dayLabel} $index={index}>
        {dayLabel}
      </Styled.CalendarDay>
    );
  };

  const renderCalendarDate = (date, index) => {
    const { current, month, year } = dateState;
    const _date = new Date(date.join('-'));
    const isTodayDate = isSameDay(_date, today);
    const isCurrentDate = current && isSameDay(_date, current);
    const inMonth = isSameMonth(_date, new Date([year, month, 1].join('-')));
    const handleClick = () => onDateClick(_date);
    const DateComponent = isCurrentDate
      ? Styled.HighlightedCalendarDate
      : isTodayDate
        ? Styled.TodayCalendarDate
        : Styled.CalendarDate;

    return (
      <DateComponent
        key={getDateISO(_date)}
        $index={index}
        $inMonth={inMonth ? true : undefined}
        onClick={handleClick}
        tabIndex={0}
        title={_date.toDateString()}
      >
        {_date.getDate()}
      </DateComponent>
    );
  };

  const onDateClick = useCallback(
    (date) => {
      if (!isSameDay(date, dateState.current)) {
        updateDateState(date);
        onDateChanged(date);
        dispatch(changeBookingInputValue({ date: getDateISO(date) }));
        closeCalendar();
      }
    },
    [dispatch, onDateChanged, dateState, closeCalendar],
  );

  const handlePreviousMonth = () => {
    const { month, year } = dateState;
    const previousMonth = getPreviousMonth(month, year);
    setDateState({
      month: previousMonth.month,
      year: previousMonth.year,
      current: dateState.current,
    });
  };

  const handleNextMonth = () => {
    const { month, year } = dateState;
    const nextMonth = getNextMonth(month, year);
    setDateState({
      month: nextMonth.month,
      year: nextMonth.year,
      current: dateState.current,
    });
  };

  return (
    <Styled.CalendarContainer>
      {renderMonthAndYear()}
      <Styled.CalendarGrid>
        <Fragment>{Object.keys(WEEK_DAYS).map(renderDayLabel)}</Fragment>
        <Fragment>{getCalendarDates().map(renderCalendarDate)}</Fragment>
      </Styled.CalendarGrid>
    </Styled.CalendarContainer>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func.isRequired,
  closeCalendar: PropTypes.func.isRequired,
};
