import {  createSlice } from '@reduxjs/toolkit';





// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user:null,
    selectedImage:null,
  },
  reducers: {
   login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) =>{
      state.user = null;
    },
    selectImage: (state, action) =>{
      state.selectedImage = action.payload;
    },
    resetImage: (state) =>{
      state.selectedImage =null
    }
  },
});

export const {login, logout, selectImage, resetImage } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.app.value)`
export const selectUser = (state) => state.app.user;
export const selectSelectedImage = (state) => state.app.selectedImage;



export default appSlice.reducer;