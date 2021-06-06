import React from "react";
import Type from "./Type";

const initialState = {
    cartList:[]
}

const mainReducer = (state={...initialState}, action) => {
    switch (action.type) {
        case Type.SET_CART_LIST: {
            const {cartUpdate} = action.payload
            return {
                ...state,
                cartList: cartUpdate
            }
        }
    }
}

export default mainReducer;