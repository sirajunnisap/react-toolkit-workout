import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'    //1
                                                                          //4  
import axios from 'axios'                                   //6

const initialState = {                                            //3
    loading : false,
    users: [],
    error: ''
}

//generates pending ,fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{                  // createAsyncThunk it will automatically dispatch lifecycle actions based on the returned promise --a promise is either pending fulfilled or rejected ==extrareducers
     return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>response.data.map((user)=> user.id))
        
})                                                                           //7--1-action name 2-call back fn  that create the payload 

const userSlice = createSlice({                                   //2
    name:'user',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchUsers.pending, (state) =>{              //we add cases for each of the promis lifecycle methods  --1-action type -this is the case reducer function will recieve state and update loading to true
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action) =>{
            state.loading = false
            state.users = action.payload
            state.error =''
        })
        builder.addCase(fetchUsers.rejected , (state,action) =>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default  userSlice.reducer


//redux toolkit provides a create async thunk fn 
//to implement the creation and dispatching og async actions

//5 npm i axios