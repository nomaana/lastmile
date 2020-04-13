import {Action} from '../../action/delivered/deliveredAction';

// States' definition
export interface deliveredState {
  orderId: string;
  itemDes: string;
  customerName: string;
  devilaryAddress: string;
}

// export interface State {
//   accessToken: ProfileState;
// }

const initialState: deliveredState = {
  // isFetching: false,
  // accessToken: 'sample',
  orderId: '',
  itemDes: '',
  customerName: '',
  devilaryAddress: '',
  // terms: false,
};

const delivered = (
  state: deliveredState = initialState,
  action: Action,
): deliveredState => {
  switch (action.type) {
    case 'SET_ORDERID':
      return {...state, orderId: action.orderId};
    case 'SET_ITEM_DESCRIPTION':
      return {...state, itemDes: action.itemDes};
    case 'SET_CUSTOMER_NAME':
      return {...state, customerName: action.customerName};
    case 'SET_DELIVERY_ADDRESS':
      return {...state, devilaryAddress: action.devilaryAddress};
  }
  return state;
};
export default delivered;
