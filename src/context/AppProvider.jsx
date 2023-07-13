import { createContext, useEffect, useReducer, useState } from 'react'


const DispatchContext = createContext();
const StateContext = createContext();

const AppProvider = (props) => {
// if cart has values
let cartFromLocal =JSON.parse(localStorage.getItem('cartItems'));
    // initial state
    const initialState = { cartItems: cartFromLocal?.cartItems ? [...cartFromLocal.cartItems] : [] }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add_to_cart':
                return ({ ...state,cartItems: [...state.cartItems, action.payload] });
            case 'remove_cart':
                let filteredState = state.cartItems.filter((item) => {
                    return (item.name !== action.payload.name)
                })
                return ({cartItems: [...filteredState] })
            default:
                return state;
        }
    }

    // useReducer
    let [state, dispatch] = useReducer(reducer, initialState);

// setting cart data to localstorage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state));
    }, [state])


// state store cart data from localStorage
    let [cart, setCart] = useState();
    // retrieving data from localstorage on state updation
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems'));
        if (items) {
          setCart(items);
        }
      }, [state]);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={cart}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export { AppProvider, DispatchContext, StateContext }
