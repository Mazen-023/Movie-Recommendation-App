// Profile.js
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import FavoriteMovies from "./FavoriteMovies";
import axios from "axios";
import Cookies from "js-cookie";


const Profile = () => {
  const isAuthenticated = Cookies.get("data") && JSON.parse(Cookies.get("data")); // Access auth state
  const [isEditing, setIsEditing] = useState(false);
  console.log(isAuthenticated, "profile");
  const [isEditingSocial, setIsEditingSocial] = useState(false);
  const [profileData, setProfileData] = useState({
    username: isAuthenticated.data.firstName || "Enter Your Name",
    bio: "Bio",
    email: isAuthenticated.data.email || "Email",
    profileImage: null, // To store profile image URL or file
    socialLinks: {
      twitter: "",
      instagram: "",
      facebook: "",
    },
    favoriteMovies: [],
  });

  // API call to mark movie as favorite and update user's profile
  const handleFavoriteMovie = (movie) => {
    setProfileData((prevState) => ({
      ...prevState,
      favoriteMovies: [...prevState.favoriteMovies, movie],
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setProfileData({ ...profileData, profileImage: upload.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle social media links update
  const handleSocialMediaChange = (platform, value) => {
    setProfileData({
      ...profileData,
      socialLinks: { ...profileData.socialLinks, [platform]: value },
    });
  };

  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleEditSocialToggle = () => setIsEditingSocial(!isEditingSocial);

  return (
    <div className="min-h-screen bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900">
      <div className="container mx-auto p-4">
        <div className="bg-gray-900 dark:bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Profile Image Upload */}
            <div>
              <label htmlFor="profileImageUpload">
                <img
                  src={
                    profileData.profileImage || "/path/to/default-avatar.png"
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover cursor-pointer"
                />
              </label>
              <input
                type="file"
                id="profileImageUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            {/* User Info */}
            <div>
              {isEditing ? (
                <div>
                  <input
                    type="text"
                    name="username"
                    value={profileData.username}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        username: e.target.value,
                      })
                    }
                    className="text-lg font-bold mb-2 p-1 bg-gray-700 dark:bg-gray-200 rounded"
                  />
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    className="w-full bg-gray-700 dark:bg-gray-200 rounded p-1 mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full bg-gray-700 dark:bg-gray-200 rounded p-1"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl font-bold">{profileData.username}</h1>
                  <p>{profileData.bio}</p>
                  <p>{profileData.email}</p>
                </div>
              )}

              {/* Edit Button */}
              <button
                onClick={handleEditToggle}
                className="mt-2 px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 bg-gray-900 dark:bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Social Links</h2>
          {isEditingSocial ? (
            <div>
              {Object.keys(profileData.socialLinks).map((platform) => (
                <div key={platform} className="mb-2">
                  <input
                    type="url"
                    placeholder={`Enter ${platform} link`}
                    value={profileData.socialLinks[platform]}
                    onChange={(e) =>
                      handleSocialMediaChange(platform, e.target.value)
                    }
                    className="w-full bg-gray-700 dark:bg-gray-200 rounded p-1"
                  />
                </div>
              ))}
              <button
                onClick={handleEditSocialToggle}
                className="mt-2 px-4 py-1 text-white bg-green-500 hover:bg-green-600 rounded"
              >
                Save Social Links
              </button>
            </div>
          ) : (
            <div>
              {Object.entries(profileData.socialLinks).map(([platform, link]) =>
                link ? (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 mb-2"
                  >
                    {platform}
                  </a>
                ) : null
              )}
              <button
                onClick={handleEditSocialToggle}
                className="mt-2 px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                {isEditingSocial ? "Save" : "Edit Social Links"}
              </button>
            </div>
          )}
        </div>

        {/* Favorite Movies */}
        <FavoriteMovies movies={profileData.favoriteMovies} />
      </div>
    </div>
  );
};

export default Profile;
