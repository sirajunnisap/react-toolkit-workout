import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    numberOfCake : 10
}
const cakeSlice = createSlice({                       //1
    name:'cake',
    initialState,
    reducers: {
        ordered :(state)=>{
              state.numberOfCake--                                              //we don't have to explicitly return the new state and two we can directly mutate the state
        },                                          //3
        restocked: (state,action)=>{
            state.numberOfCake += action.payload                                          //we increment the number of cakes by the amount specified in the action payload value
        }
    },
})


//what about the actions -- createslice will automatically genarate action creators with the same names as the reducer fn  


export default  cakeSlice.reducer

export const {ordered,restocked} = cakeSlice.actions          //2

//create a feature slice in cackSlice.js using create slice function  which generates the actions and reducers 
//perform direct mutations on the state and that is completely  okey with immer being used under the head

//4 -->store.js