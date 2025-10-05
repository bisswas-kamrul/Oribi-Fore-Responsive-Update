import { createSlice } from '@reduxjs/toolkit'

export const AdToCrat = createSlice({
  name: 'AdToCrat',
  initialState:{
     value: [],
  },
  reducers: {
     adToCrat: (state , action) => {
      const alldata = state.value.find((item)=> item.title === action.payload.title)
      if (alldata) {
          alldata.quantity+=1;        
      } else {
        state.value.push({...action.payload,quantity:1 })
      }
    },
     increment:(state,action) => {
        state.value.map((item) =>{
          if(item.title === action.payload.title){
            item.quantity += 1;
          }
        })
    },
    decrement:(state,action) => {
        state.value.map((item) =>{
          if(item.title === action.payload.title){
            item.quantity -= 1;
          }
        })
    },
    
  },
})


export const { adToCrat,increment,decrement } = AdToCrat.actions

export default AdToCrat.reducer