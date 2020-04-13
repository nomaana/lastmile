import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

// Action Definition
export interface SetFirstName {
  type: 'SET_FIRSTNAME';
  firstName: string | any;
}
export interface SetLastName {
  type: 'SET_LASTNAME';
  lastName: string | any;
}
export interface SetEmployeeCode {
  type: 'SET_EMPLOYEE_CODE';
  employeeCode: string | any;
}
export interface SetWhereHouseAssociated {
  type: 'SET_WHEREHOUSE_ASSOCIATED';
  whereHouseAss: string | any;
}
export interface SetAddress {
  type: 'SET_ADDRESS';
  address: string | any;
}
export interface SetEmail {
  type: 'SET_EMAIL';
  email: string | any;
}
export interface SetMobile {
  type: 'SET_MOBILE';
  mobile: string | any;
}
export interface SetVehicle {
  type: 'SET_VEHICLE';
  vehicle: string | any;
}

// Union Action Types
export type Action =
  | SetFirstName
  | SetLastName
  | SetEmployeeCode
  | SetWhereHouseAssociated
  | SetAddress
  | SetEmail
  | SetMobile
  | SetVehicle;
// Action Creators

export const setFirstName = (firstName: string | any): SetFirstName => {
  return {type: 'SET_FIRSTNAME', firstName};
};
export const setLastName = (lastName: string | any): SetLastName => {
  return {type: 'SET_LASTNAME', lastName};
};
export const setEmployeeCode = (
  employeeCode: string | any,
): SetEmployeeCode => {
  return {type: 'SET_EMPLOYEE_CODE', employeeCode};
};
export const setDateOfBirth = (
  whereHouseAss: string | any,
): SetWhereHouseAssociated => {
  return {type: 'SET_WHEREHOUSE_ASSOCIATED', whereHouseAss};
};
export const setAddress = (address: string | any): SetAddress => {
  return {type: 'SET_ADDRESS', address};
};
export const setEmail = (email: string | any): SetEmail => {
  return {type: 'SET_EMAIL', email};
};
export const setMobile = (mobile: string | any, country: any): SetMobile => {
  return {type: 'SET_MOBILE', mobile};
};
export const setVehicle = (vehicle: string | any, country: any): SetVehicle => {
  return {type: 'SET_VEHICLE', vehicle};
};
// thunk action
// export const DeliveryboyprofileAction = (
//   firstName: string | number,
//   lastName: string,
//   employeeCode: string,
//   whereHouseAss: string,
//   address: string,
//   email: string,
//   mobile: string,
//   vehicle: string,
// ): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>,
// ): Promise<void> => {
//   dispatch(isFetching(true));
//   console.log('in progress');
//   // Fake async process
//   setTimeout(() => {
//     // set
//     dispatch(set('this_is_access_token'));
//     setTimeout(() => {
//       dispatch(isFetching(false));
//     }, 1000);
//   }, 3000);
// };
