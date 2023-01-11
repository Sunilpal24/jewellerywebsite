const initial={
    wishlist:[],
    cart:[]
}

export const reducer = (state = initial, action) => {
    switch (action.type){
        case "ADD_CART":
            return {
               ...state,
               cart: [...state.cart, action.payload]
            };
            case "REMOVE_CART":
      return {
        ...state,
        cart: [...state.cart.filter((e) => e.id !== action.payload)],
      };
      case "ADD_WISH":
            return {
               ...state,
               wishlist: [...state.wishlist, action.payload]
            };
            case "REMOVE_WISH":
      return {
        ...state,
        wishlist: [...state.wishlist.filter((e) => e.id !== action.payload)],
      };
      case "inc":
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cart[existingItemIndex];
      let updtItems;
      let amountnumber = action.payload.amount + 1;
      if (existingItem) {
        const updtItem = {
          ...existingItem,
          amount: amountnumber,
          total: existingItem.price * amountnumber,
        };
        updtItems = [...state.cart];
        updtItems[existingItemIndex] = updtItem;
      } else {
        updtItems = state.cart.concat(action.payload.price);
      }
      return { ...state, cart: updtItems };
    case "dic":
      const existingItemIndex1 = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem1 = state.cart[existingItemIndex1];
      let updtItems1;
      if (existingItem1) {
        const updtItem1 = {
          ...existingItem1,
          amount: existingItem1.amount - 1,
          total: existingItem1.total - action.payload.price,
        };
        updtItems1 = [...state.cart];
        updtItems1[existingItemIndex1] = updtItem1;
      } else {
        updtItems1 = state.cart.concat(action.payload.price);
      }
      return { ...state, cart: updtItems1 };
        default:
            return state;

    }
}