const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        loading: false,
        total: 0,
        total_items: 0,
      };
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0),
      };
    case 'GET_TOTALS':
      const { total, total_items } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.total_items += amount;

          return cartTotal;
        },
        {
          total: 0,
          total_items: 0,
        }
      );

      return {
        ...state,
        total,
        total_items,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;