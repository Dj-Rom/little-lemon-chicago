import styled from 'styled-components';
import { Button, Dropdown, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from 'reactstrap';

export const DatePickerContainer = styled.div`
  width: 30rem;
  height: 2rem;
  position: relative;
  @media all and (max-width: 555px) {
    width: 90vw;
  }
`;

export const DatePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 0.56rem;
  height: 2rem;
  border: 1px solid var(--Grey-700, #88958f);
  overflow: hidden;
`;

export const DatePickerLabel = styled(Label)`
  margin: 0;
  padding: 0 2rem;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--Grey-700, #88958f);
  border-right: 2px solid var(--Grey-700, #88958f);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 102, 204, 0.05);
`;

export const DatePickerInput = styled(Input)`
  font-weight: 500;
  font-size: 1rem;
  color: var(--Grey-700, #88958f);
  box-shadow: none;
  border: none;
  text-align: center;
  letter-spacing: 1px;
  background: transparent !important;
  display: flex;
  align-items: center;
  text-align: left;
  ::placeholder {
    color: var(--Grey-700, #88958f);
    font-size: 0.9rem;
  }
  width: 100%;
  height: 100%;
  &:focus {
    color: blue; /* Change this to the desired focus color */
    outline: none; /* Removes default outline */
  }

  &:focus::placeholder {
    border-radius: 2px;
    width: 28 rem;
    border: 3px solid lightblue; /* Optional: Change placeholder color on focus */
  }
`;

export const DatePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const DatePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const DatePickerDropdownMenu = styled(DropdownMenu)`
  margin-top: 3rem;
  left: 0;
  width: 100%;
  // height: 75vh !important;
  border: none;
  padding: 0;
  transform: none !important;
`;

export const DatePickerButton = styled(Button)`
  position: absolute;
  border: 2px solid #06c;
  margin-top: 2%;
  right: 50% !important;
  background: transparent;
  font-size: 1.2rem;
  color: #06c;
  :hover {
    border: white solid #06c;
    color: white !important;
    background: #06c;
  }
`;
