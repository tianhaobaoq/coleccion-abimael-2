import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './storelogin'

const store = configureStore({
reducer: {
    login:loginReducer
}
})
export default store