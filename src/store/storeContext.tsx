import {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
} from 'react';
import { initialState, storeReducer } from './storeReducer';
import { InitialStateType } from './storeTypes';

const StoreContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface StoreProviderProps {}

const StoreProvider: FunctionComponent<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState as never);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useShop must be used within ShopContext');
  }
  return context;
};

export default StoreProvider;
