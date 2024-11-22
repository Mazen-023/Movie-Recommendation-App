import React from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { addFavoriteMovie } from "../redux/slices/action"; // Redux action to add favorite movie
import { FaHeart } from "react-icons/fa"; // Importing FontAwesome Heart Icon
import { toast, ToastContainer } from "react-toastify"; // Import React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import React-Toastify CSS

const Card = ({ data, trending, index, media_type }) => {
  const dispatch = useDispatch();
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type;

  // Handle the "Add to Favorites" functionality
  const handleAddToFavorites = () => {
    // Dispatch action to add movie to favorites
    dispatch(addFavoriteMovie(data));

    // Show toast notification
    toast.success(
      `${data.title || data.name} has been added to your favorites!`,
      {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div className="relative w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded hover:scale-105 transition-all">
      <Link to={"/" + mediaType + "/" + data.id}>
        {data?.poster_path ? (
          <img
            src={imageURL + data?.poster_path}
            alt="Something went wrong please wait"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="bg-neutral-800 dark:bg-neutral-900 h-full w-full flex justify-center items-center text-white dark:text-gray-200">
            No image found
          </div>
        )}

        {/* Trending Badge */}
        <div className="absolute top-4">
          {trending && (
            <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 dark:bg-white/60 text-white dark:text-black">
              {index} Trending
            </div>
          )}
        </div>

        {/* Movie Title and Info */}
        <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 dark:bg-white/60 p-2">
          <h2 className="text-lg font-semibold text-ellipsis line-clamp-1 text-white dark:text-black">
            {data?.title || data?.name}
          </h2>
          <div className="text-sm text-neutral-400 dark:text-neutral-600 flex justify-between items-center">
            <p className="text-white dark:text-black">
              {moment(data.release_date).format("MMMM Do YYYY")}
            </p>
            <p className="bg-black dark:bg-gray-800 px-1 rounded-full text-xs text-white dark:text-gray-300">
              Rating: {Number(data.vote_average).toFixed(1)}
            </p>
          </div>
        </div>
      </Link>

      {/* Favorite Button */}
      <button
        onClick={handleAddToFavorites}
        className="absolute top-2 right-2 text-white dark:text-red-500 hover:text-red-500 dark:hover:text-white transition-all"
      >
        <FaHeart size={24} /> {/* Heart Icon */}
      </button>

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Card;
