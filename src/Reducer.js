export const initialState = {
    n_items:0,
    n_wishlist_items:0,
    cart:[],
    wishlist:[],
    cart_quantity: {},
    current_user:'',
    // user_subtotal :0
};


const reducer =(state, action)=>{
    console.log(action,state)
    switch(action.type){
        case 'add_to_cart':
            return {...state,  cart: [...state.cart,action.item],
                wishlist: state.wishlist? (state.wishlist.filter((item) => item !== action.item)) : [], 
                // user_subtotal:    
            };
                console.log(state.wishlist.length(), state.n_wishlist_items)
        case 'delete_in_cart':
            return {...state, n_items: state.cart.length-1, cart: state.cart.filter((item) => item !== action.item)};
        case 'add_to_wishlist':
            return {...state, cart: state.cart.filter((item) => item !== action.item), 
                    wishlist:[...state.wishlist,action.item]}
        case 'delete_in_wishlist':
            return {...state, 
                wishlist: state.wishlist.filter((item) => item !== action.item)};
        
        // case 'upd_qty_cart' :
        //         return {...state, action.qty}

        default:
            return state;
    }
};

export default reducer;