import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data'; 
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
  total_items: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateTotals = () => {
    dispatch({ type: 'GET_TOTALS' });
  };

  const setIncrease = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearCart =() => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    setTimeout(() => {
      dispatch({ type: 'DISPLAY_ITEMS', payload: cartItems });
    }, 2000);
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, dispatch, setDecrease, setIncrease, removeItem, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
