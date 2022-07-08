import {  createSlice } from '@reduxjs/toolkit';





// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage:"",
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage += action.payload;
    },
    resetCameraImage: (state) => {
      state.cameraImage = null;
    },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.camera.value)`
export const selectCameraImage = (state) => state.camera.cameraImage;



export default cameraSlice.reducer;
