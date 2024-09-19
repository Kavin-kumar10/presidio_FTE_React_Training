// Reducer function for add remove and sorting the items
const itemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case 'SORT_ITEMS':
            return { ...state, items: [...state.items].sort((a, b) => a[action.payload].localeCompare(b[action.payload])) };
        default:
            return state;
    }
};

export default itemReducer