import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allStocks:[
        {
            id: 1,
            name: 'Apple',
            price: 145.83,
        },
        {
            id: 2,
            name: 'Microsoft Corporation',
            price: 277.65,
        },
        {
            id: 3,
            name: 'Amazon.com Inc.',
            price: 3372.20,
        }
    ],
    stocks:[],
    amount:10000
}

export const PortfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    AddStock: (state,action) => {
        const existingStock = state.stocks.find(s => s.id === action.payload.id);
        if(state.amount > action.payload.price){
            if (!existingStock) {
                state.stocks.push({...action.payload,count:1});
              }else{
                  state.stocks.find(s => s.id === action.payload.id).count+=1;
              }
              state.amount = state.amount - action.payload.price;
        }
        else{
            alert("Insufficient balance.")
        }
    },
    RemoveStock: (state,action) => {
        state.stocks = state.stocks.map((elem)=>{
            if(elem == action.payload){
                elem.count--;
            }
        })
        state.amount = state.amount + action.payload.price;
    }
  },
})

// Action creators are generated for each case reducer function
export const { AddStock,RemoveStock } = PortfolioSlice.actions

export default PortfolioSlice.reducer