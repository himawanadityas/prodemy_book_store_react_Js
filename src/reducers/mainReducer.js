import React from "react";
import Type from "./Type";

const initialState = {
    cartBadge : 0
}

const mainReducer = (state={...initialState}, action) => {
    switch (action.type) {
        case Type.SET_CART_LIST: {
            const {cartBadge} = action.payload
            return {
                ...state,
                cartBadge: cartBadge
            }
        }
    }
}

export default mainReducer;