const initialState = {
  favoriteMovies: [], // Favorite movies stored here
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      const isMovieAlreadyInFavorites = state.favoriteMovies.some(
        (movie) => movie.id === action.payload.id
      );
      if (isMovieAlreadyInFavorites) return state;

      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };

    case "REMOVE_FAVORITE_MOVIE":
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default movieReducer;
