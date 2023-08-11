import {configureStore} from '@reduxjs/toolkit'
import iceCreamReducer from '../features/icecream/icecreamSlice'
import cakeReducer from '../features/cake/cakeSlice'
// const reduxLogger = require('redux-logger')
const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer : {
        cake : cakeReducer,
        icecream : iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)

})

export default store

//4 create the store using the configure store function and attach the reducer