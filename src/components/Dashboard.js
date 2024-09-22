import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieRecommendations, likeMovie, addToWatchlist } from '../redux/slices/movieoSlice'; // Assume these actions exist in your movieSlice

const Dashboard = () => {
  const dispatch = useDispatch();
  const recommendedMovies = useSelector((state) => state.movie.recommendations); // Get movie recommendations from Redux
  const user = useSelector((state) => state.auth.user); // Access user data from Redux
  
  const [selectedGenre, setSelectedGenre] = useState('');

  // Fetch movie recommendations when the component mounts or genre changes
  useEffect(() => {
    dispatch(fetchMovieRecommendations(selectedGenre)); // Fetch movies based on the selected genre
  }, [dispatch, selectedGenre]);

  const handleLike = (movieId) => {
    dispatch(likeMovie(movieId)); // Dispatch like action
  };

  const handleAddToWatchlist = (movieId) => {
    dispatch(addToWatchlist(movieId)); // Dispatch add to watchlist action
  };

  return (
    <div className="Dashboard p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.firstName}! Here are your recommendations:</h1>

      {/* Genre Filter */}
      <div className="GenreFilter mb-6">
        <label htmlFor="genre" className="block text-lg font-medium mb-2">Filter by Genre:</label>
        <select
          id="genre"
          className="p-2 border rounded"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          {/* Add more genres as needed */}
        </select>
      </div>

      {/* Recommended Movies */}
      <div className="RecommendedMovies grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedMovies.map((movie) => (
          <div key={movie.id} className="MovieCard bg-white p-4 rounded-lg shadow-md">
            <img src={movie.posterUrl} alt={movie.title} className="w-full h-64 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-700 mb-4">{movie.description}</p>

            {/* Interactive Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleLike(movie.id)}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
              >
                Like
              </button>
              <button
                onClick={() => handleAddToWatchlist(movie.id)}
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700"
              >
                Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
