import useFilterSort from "../CustomHook/SortHook";
import itemReducer from "../Reducer";
import React, { useReducer, useContext, useState, useEffect, useRef, useLayoutEffect, createContext } from 'react';

// Context for managing item state
export const ItemContext = createContext();

// Initial state for the reducer
const initialState = {
    items: [],
};


// Provider components
export const ItemProvider = ({ children }) => {
    const [state, dispatch] = useReducer(itemReducer, initialState);
    
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items')) || [];
        savedItems.forEach(item => dispatch({ type: 'ADD_ITEM', payload: item }));
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(state.items));
    }, [state.items]);

    return (
        <ItemContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemContext.Provider>
    );
};

