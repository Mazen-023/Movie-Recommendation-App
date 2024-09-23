// reducer.js
const initialState = {
  favoriteMovies: [],
  // other state data
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_FAVORITE_MOVIE':
          // Check if movie is already in favorites to avoid duplicates
          const isMovieAlreadyInFavorites = state.favoriteMovies.some(
              (movie) => movie.id === action.payload.id
          );
          if (isMovieAlreadyInFavorites) return state;
          
          return {
              ...state,
              favoriteMovies: [...state.favoriteMovies, action.payload],
          };
      default:
          return state;
  }
};

export default movieReducer;
