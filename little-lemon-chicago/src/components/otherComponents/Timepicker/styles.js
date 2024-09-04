import styled from 'styled-components';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from 'reactstrap';

const $colorDarkGray = '#333333';
export const TimePickerContainer = styled.div`
  width: 30rem;
  height: 2rem;
  position: relative;

  .dropdown-item {
    width: 5rem;
  }
  @media all and (max-width: 555px) {
    width: 90vw;
  }
`;

export const TimePickerFormGroup = styled(FormGroup)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 0.56rem;
  height: 2rem;
  border: 1px solid ${$colorDarkGray};
  overflow: hidden;
`;

export const TimePickerLabel = styled(Label)`
  margin: 0;
  padding: 0 2rem;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${$colorDarkGray};
  border-right: 2px solid ${$colorDarkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 102, 204, 0.05);
`;

export const TimePickerInput = styled(Input)`
  font-weight: 500;
  font-size: 1rem;
  color: ${$colorDarkGray};
  box-shadow: none;
  width: 20rem;
  height: 2rem;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${$colorDarkGray};
  letter-spacing: 1px;
  background: transparent !important;

  align-items: center;
  text-align: left;
  width: 100%;
  height: 100%;
  ::placeholder {
    color: ${$colorDarkGray};
    font-size: 0.9rem;
  }
`;

export const TimePickerDropdown = styled(Dropdown)`
  position: absolute;
  width: 100%;
  top: 100%; /* Position directly below the input */
  left: 0;
  z-index: 1000; /* Ensure dropdown appears above other content */
`;

export const TimePickerDropdownToggle = styled(DropdownToggle)`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
`;

export const TimePickerDropdownMenu = styled(DropdownMenu)`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate3d(0px, 5px, 0) !important; /* Ensuring the transform is applied */
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  align-content: center;
  flex-wrap: wrap;
  &.show {
    display: flex; /* Display flex when .show class is added */
  }
`;

export const TimePickerDropdownItem = styled(DropdownItem)`
  display: flex;
  background-color: ${(props) => (props.disabled ? '#d3d3d3' : 'white')};
  color: ${(props) => (props.disabled ? '#a9a9a9' : 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  padding: 10px;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#d3d3d3' : '#f0f0f0')};
  }
`;

export const TimePickerButton = styled(Button)`
  position: absolute;
  border: 2px solid #06c;
  margin-top: 2%;
  right: 50% !important;
  background: transparent;
  font-size: 1.2rem;
  color: ${$colorDarkGray};

  :hover {
    border: white solid #06c;
    color: white !important;
    background: ${$colorDarkGray};
  }
`;
