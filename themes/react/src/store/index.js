import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import moviesSlice from '../features/movies/moviesSlice'

export default configureStore({
    reducer: {
        // counter: counterReducer,
        movies: moviesSlice,
    },
});
