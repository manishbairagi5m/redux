import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './actions/counterSlice'
import userSlice from './actions/userSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice
  }
})