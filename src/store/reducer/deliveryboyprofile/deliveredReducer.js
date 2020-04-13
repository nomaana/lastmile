import {Action} from '../../action/deliveryboyprofile/profileAction';

// States' definition
export interface ProfileState {
  firstName: string;
  lastName: string;
  employeeCode: string;
  whereHouseAss: string;
  address: string;
  email: string;
  mobile: string;
  vehicle: string;
}

// export interface State {
//   accessToken: ProfileState;
// }

const initialState: ProfileState = {
  // isFetching: false,
  // accessToken: 'sample',
  firstName: '',
  lastName: '',
  employeeCode: '',
  whereHouseAss: '',
  address: '',
  email: '',
  mobile: '',
  vehicle: '',
  // terms: false,
};

const profile = (
  state: ProfileState = initialState,
  action: Action,
): ProfileState => {
  switch (action.type) {
    case 'SET_FIRSTNAME':
      return {...state, firstName: action.firstName};
    case 'SET_LASTNAME':
      return {...state, lastName: action.lastName};
    case 'SET_EMPLOYEE_CODE':
      return {...state, employeeCode: action.employeeCode};
    case 'SET_WHEREHOUSE_ASSOCIATED':
      return {...state, whereHouseAss: action.whereHouseAss};
    case 'SET_ADDRESS':
      return {...state, address: action.address};
    case 'SET_EMAIL':
      return {...state, email: action.email};
    case 'SET_MOBILE':
      return {...state, mobile: action.mobile};
    case 'SET_VEHICLE':
      return {...state, vehicle: action.vehicle};
  }
  return state;
};
export default profile;
