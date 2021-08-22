import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    status: 'idle',
    error: null,
}
  
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFydGluIFBvbGxvY2siLCJyZWFzb24iOiJUbyBsb29rIGJldHRlciB0aGFuIGEgcmFuZG9tIHN0cmluZyJ9.7egTr-n_f2JnYU87_Jv_miyfVfAyjQT41BzC0Fq22Vo'

// Vuex Actions
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get("/api/v1/movies", {
        headers: { Authorization: `Bearer ${token}` }
    });
    console.log(response.data.data);
    return response.data.data.data;
    // return [
    //     { id: '1', title: 'First Post!', description: 'Hello!', category: 'Comedy', image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/-1x-1.jpg' },
    //     { id: '2', title: 'Second Post', description: 'More text', category: 'Comedy', image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/-1x-1.jpg' }
    // ]
})
  
const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {  // Vuex Mutator - Called like an action
    },
    extraReducers: { // Vuex Mutator - Runs after an action above
        [fetchMovies.pending]: (state, action) => {
          state.status = 'loading'
        },
        [fetchMovies.fulfilled]: (state, action) => {
          state.status = 'succeeded'
          // Add any fetched movies to the array
          state.movies = state.movies.concat(action.payload)
        },
        [fetchMovies.rejected]: (state, action) => {
          state.status = 'failed'
          state.error = action.payload
        },
      },
});

 
export const selectAllMovies = (state) => state.movies.movies

export const selectMovieById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === movieId)

export default moviesSlice.reducer













  
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFydGluIFBvbGxvY2siLCJyZWFzb24iOiJUbyBsb29rIGJldHRlciB0aGFuIGEgcmFuZG9tIHN0cmluZyJ9.7egTr-n_f2JnYU87_Jv_miyfVfAyjQT41BzC0Fq22Vo'

// // Vuex Actions
// export const getAll = createAsyncThunk(
//     'movies/getAll',
//     async type => {
//         const response = await axios.get("/api/v1/movies", {
//                                     headers: { Authorization: `Bearer ${token}` }
//                                 });
//         return response.data.data;
//     },
// );

// export const moviesSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {  // Vuex Mutator - Called like an action
//         otherAction: (state, action) => ({
//             ...state,
//             otherProperty: action.payload,
//         }),
//         // ...
//         finalAction: (state, action) => ({
//             ...state,
//             otherProperty: action.payload,
//         }),
//     },
//     extraReducers: { // Vuex Mutator - Runes after an action above
//         [getAll.fulfilled]: (state, action) => {
//             state.movies = action.payload;
//         },
//     },
// });

// export const store = configureStore({
//     reducer: moviesSlice.reducer,
// });

// export default moviesSlice.reducer
