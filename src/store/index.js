import { createSlice, configureStore } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {},
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

console.log(store.getState());
store.dispatch({
  type: "song/addSong",
  payload: "Get Down with sicknes",
});

console.log(store.getState());
