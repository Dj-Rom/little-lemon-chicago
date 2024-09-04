import styled from 'styled-components'

export const Arrow = styled.button`
  appearance: none;
  user-select: none;
  outline: none !important;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 0;
  border: none;
  border-top: 1.6em solid transparent;
  border-bottom: 1.6em solid transparent;
  transition: all 0.25s ease-out;
`

export const ArrowLeft = styled(Arrow)`
  border-right: 2.4em solid var(--Grey-700, #88958f);
  left: 1.5rem;
  :hover {
    border-right-color: var(--Grey-700, #88958f);
  }
`

export const ArrowRight = styled(Arrow)`
  border-left: 2.4em solid var(--Grey-700, #88958f);
  right: 1.5rem;
  margin-top: 0rem;
  background-color: '';
  :hover {
    border-left-color: var(--Grey-700, #88958f);
  }
`

export const CalendarContainer = styled.div`
  font-size: 5px;
  border: 2px solid var(--Grey-700, #88958f);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: auto;
  }
`

export const CalendarHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template: repeat(7, auto) / repeat(7, auto);
`

export const CalendarMonth = styled.div`
  font-weight: 500;
  font-size: 5em;
  color: var(--Grey-700, #88958f);
  text-align: center;
  padding: 0.5em 0.25em;
  word-spacing: 5px;
  user-select: none;
`

export const CalendarCell = styled.div`
  text-align: center;
  align-self: center;
  letter-spacing: 0.1rem;
  padding: 0.6em 0.25em;
  user-select: none;
  grid-column: ${(props) => (props.$index % 7) + 1} / span 1;
`

export const CalendarDay = styled(CalendarCell)`
  font-weight: 600;
  font-size: 2.25em;
  color: var(--Grey-700, #88958f);
`

export const CalendarDate = styled(CalendarCell)`
  font-weight: ${(props) => (props.$inMonth ? 500 : 300)};
  font-size: 4em;
  cursor: pointer;

  grid-row: ${(props) => Math.floor(props.$index / 7) + 2} / span 1;
  transition: all 0.4s ease-out;
  :hover {
    color: #var(--Grey-700, #88958f);
    background: rgba(0, 102, 204, 0.075);
  }
`

export const HighlightedCalendarDate = styled(CalendarDate)`
  color: #fff !important;
  border-radius: 0.25rem;
  background: var(--Yellow, #f4ce14) !important;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border: 2px solid #06c; /* Blue border around the element */
    border-radius: inherit; /* Match the border-radius of the parent */
  }

  &:focus {
    border-radius: 0.25rem; /* Adjusting focus border-radius */
    border: 3px solid lightblue; /* Focus border */
    outline: none; /* Remove default focus outline */
  }
`

export const TodayCalendarDate = styled(HighlightedCalendarDate)`
  color: var(--Grey-700, #88958f) !important;
  background: transparent !important;
  ::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom: 0.75em solid var(--Grey-700, #88958f);
    border-left: 0.75em solid transparent;
    border-top: 0.75em solid transparent;
  }
  :hover {
    color: var(--Grey-700, #88958f) !important;
    background: rgba(0, 102, 204, 0.075) !important;
  }
`

export const BlockedCalendarDate = styled(CalendarDate)`
  color: black !important;
  background: gray !important;
  position: relative;
  :hover {
    color: black !important;
    background: gray !important;
    border-color: gray;
    cursor: default;
  }
`
