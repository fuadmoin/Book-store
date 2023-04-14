import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  books: [],
  error: '',
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/YuZSKA1tOMxsZa10k5zq/books';
export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBooks = createAsyncThunk('book/addBooks',
  async (book) => {
    const response = await axios.post(url, book);
    return response.data;
  });

export const removeBook = createAsyncThunk('book/removeBook',
  async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  });

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = Object.keys(action.payload).map((key) => ({
        item_id: key,
        ...action.payload[key][0],
      }));
      return {
        ...state,
        loading: false,
        books,
      };
    });
    builder.addCase(fetchBooks.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));

    builder.addCase(addBooks.fulfilled, (state, action) => ({
      ...state,
      books: [...state.books, action.meta.arg],
      error: '',
    }));

    builder.addCase(removeBook.fulfilled, (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.meta.arg),
    }));
  },

});

export default bookSlice.reducer;
