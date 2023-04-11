import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        return 'Under construction';
      }
      return 'Ready';
    },
  },
});

export default categoriesSlice.reducer;
export const { checkStatus } = categoriesSlice.actions;
