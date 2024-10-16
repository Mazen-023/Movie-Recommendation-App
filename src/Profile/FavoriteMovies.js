// FavoriteMovies.js
import React from "react";
import { FaTimes } from "react-icons/fa";

const FavoriteMovies = ({ movies, handleRemove }) => {
  if (!movies.length) {
    return <p className="text-center text-gray-500">No favorite movies yet.</p>;
  }

  return (
    <div className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Favorite Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="text-center">
            <img
              src={movie.poster_path}
              alt={movie.title || movie.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-bold">
              {movie.title || movie.name}
            </h3>
            <p>Rating: {movie.vote_average.toFixed(1)}</p>
            {/* Remove button */}
            <button
              onClick={() => handleRemove(movie.id)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                <FaTimes size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMovies;
