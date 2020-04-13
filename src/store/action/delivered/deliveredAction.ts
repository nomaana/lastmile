import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

// Action Definition
export interface SetOrderId {
  type: 'SET_ORDERID';
  orderId: string | any;
}
export interface SetItemDescription {
  type: 'SET_ITEM_DESCRIPTION';
  itemDes: string | any;
}
export interface SetCustomerName {
  type: 'SET_CUSTOMER_NAME';
  customerName: string | any;
}
export interface SetDeliveryAddress {
  type: 'SET_DELIVERY_ADDRESS';
  devilaryAddress: string | any;
}

// Union Action Types
export type Action =
  | SetOrderId
  | SetItemDescription
  | SetCustomerName
  | SetDeliveryAddress;
// Action Creators

export const setOrderId = (orderId: string | any): SetOrderId => {
  return {type: 'SET_ORDERID', orderId};
};
export const setLastName = (itemDes: string | any): SetItemDescription => {
  return {type: 'SET_ITEM_DESCRIPTION', itemDes};
};
export const setCustomerName = (
  customerName: string | any,
): SetCustomerName => {
  return {type: 'SET_CUSTOMER_NAME', customerName};
};
export const setDeliveryAddress = (
  devilaryAddress: string | any,
): SetDeliveryAddress => {
  return {type: 'SET_DELIVERY_ADDRESS', devilaryAddress};
};

// thunk action
// export const DeliveredAction = (
//   orderId: string | number,
//   itemDes: string,
//   customerName: string,
//   devilaryAddress: string,
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
