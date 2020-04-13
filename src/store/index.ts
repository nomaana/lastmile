// import {
//   createStore,
//   combineReducers,
//   applyMiddleware,
//   DeepPartial,
// } from 'redux';

// import thunk from 'redux-thunk';
// import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
// // import AsyncStorage from '@react-native-community/async-storage';
// import profile, {
//   ProfileState,
// } from './reducer/deliveryboyprofile/profileReducer';

// import delivered, {DeliveredState} from './reducer/delivered/deliveredReducer';

// // const persistConfig = {
// //   key: 'root',
// //   storage: AsyncStorage,
// //   /**
// //    * add keys here to forget state
// //    *  */
// //   blacklist: ['signup', 'map', 'signin'],
// // };

// export interface RootState {
//   profile: ProfileState;
//   delivered: DeliveredState;
//   // onboarding: OnboardingState;
//   // dashboard: DashboardState;
//   // cartfull: CartfullState;
//   // map: MapState;
// }

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers<RootState>({
//     profile,
//     delivered,
//     // signup,
//     // onboarding,
//     // cartfull,
//     // map,
//   }),
// );
// const store = createStore(persistedReducer, applyMiddleware(thunk));

// export const persistor = persistStore(store);

// export default store;
