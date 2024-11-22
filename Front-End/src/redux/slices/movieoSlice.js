import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'; // Assuming you use axios for API calls

// Initial state combining your existing data with new properties
const initialState = {
    bannerData: [],         // Existing banner data
    imageURL: "",           // Existing image URL
    recommendations: [],    // New: Stores recommended movies
    watchlist: [],          // New: Stores user's watchlist
    likes: [],              // New: Stores user's liked movies
    status: 'idle',         // New: Status for loading states
    error: null,            // New: Error handling
};

// Async thunk for fetching movie recommendations (based on a genre)
export const fetchMovieRecommendations = createAsyncThunk(
    'movieo/fetchRecommendations',
    async (genre) => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/recommendations`, {
            params: { genre, api_key: '916414beee7257b73c6b4d171d464514' } // Replace with your API key
        });
        return response.data.results; // Return the recommended movies
    }
);

// Create the slice, merging both functionalities
export const movieoSlice = createSlice({
    name: 'movieo',
    initialState,
    reducers: {
        // Existing reducers for bannerData and imageURL
        setBannerData: (state, action) => {
            state.bannerData = action.payload;
        },
        setImageURL: (state, action) => {
            state.imageURL = action.payload;
        },
        // New reducers for liking a movie and adding to the watchlist
        likeMovie: (state, action) => {
            state.likes.push(action.payload); // Add movie ID to likes
        },
        addToWatchlist: (state, action) => {
            state.watchlist.push(action.payload); // Add movie ID to watchlist
        },
    },
    extraReducers: (builder) => {
        // Handle async thunks for fetching movie recommendations
        builder
            .addCase(fetchMovieRecommendations.pending, (state) => {
                state.status = 'loading'; // Set status to loading while fetching
            })
            .addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Fetch succeeded
                state.recommendations = action.payload; // Store the fetched recommendations
            })
            .addCase(fetchMovieRecommendations.rejected, (state, action) => {
                state.status = 'failed'; // Fetch failed
                state.error = action.error.message; // Store the error message
            });
    }
});

// Exporting the reducers and actions
export const { setBannerData, setImageURL, likeMovie, addToWatchlist } = movieoSlice.actions;

export default movieoSlice.reducer;
