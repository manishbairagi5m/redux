import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'name',
  initialState: {
    value: 'user'
  },
  reducers: {
    userType : (state,action) => {
      state.value = action.payload
    }
  }
})

export const { userType } = userSlice.actions

export default userSlice.reducer