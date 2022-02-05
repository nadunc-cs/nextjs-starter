import { Action_Type, InitialStateType } from './storeTypes';

export const initialState: InitialStateType = {
  ui: {
    showCard: false,
  },
  data: {},
  user: {},
};

export function storeReducer(state: InitialStateType, action: Action_Type) {
  const { type, payload } = action;

  switch (type) {
    case 'LOG_USER':
      return {
        ...state,
        products: payload,
      };

    case 'DATA_FETCH_1':
      return {
        ...state,
        products: payload,
      };

    case 'LOADING':
      return {
        ...state,
        total: payload,
      };
    //@ts-ignore
    case 'SHOW_CARD':
      return {
        ...state,
        ui: {
          ...state.ui,
          showCard: true,
        },
      };
    //@ts-ignore
    case 'HIDE_CARD':
      return {
        ...state,
        ui: {
          showCard: false,
        },
      };

    default:
      console.log('ERROR - no Action found in reducer');
  }
}
