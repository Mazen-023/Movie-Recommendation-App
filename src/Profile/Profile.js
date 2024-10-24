import React, { useState, useEffect } from "react";
import FavoriteMovies from "./FavoriteMovies";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const isAuthenticated =
    Cookies.get("data") && JSON.parse(Cookies.get("data"));

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [loadingFavorites, setLoadingFavorites] = useState(true);
  const [errorFavorites, setErrorFavorites] = useState(null);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profileData, setProfileData] = useState({
    firstName: isAuthenticated?.data?.firstName || "First Name",
    lastName: isAuthenticated?.data?.lastName || "Last Name",
    bio: isAuthenticated?.data?.bio || "Bio",
    email: isAuthenticated?.data?.email || "Email",
    profileImage: isAuthenticated?.data?.profileImage || null,
    favoriteMovies: [],
  });

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      setLoadingFavorites(true);
      setErrorFavorites(null);

      try {
        const response = await axios.get("/api/v1/favorites", {
          headers: {
            Authorization: `Bearer ${isAuthenticated.token}`,
          },
        });

        const favoriteMovies = response.data.data;
        setProfileData((prev) => ({
          ...prev,
          favoriteMovies: favoriteMovies,
        }));
        setLoadingFavorites(false);
      } catch (error) {
        setErrorFavorites("Failed to load favorite movies.");
        setLoadingFavorites(false);
      }
    };

    fetchFavoriteMovies();
  }, [isAuthenticated?.token]);

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: upload.target?.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddFavorite = async (movieId) => {
    try {
      const response = await axios.post(
        "/api/v1/favorites",
        { movieId },
        {
          headers: {
            Authorization: `Bearer ${isAuthenticated.token}`,
          },
        }
      );

      const updatedFavorites = response.data.data;
      setProfileData((prev) => ({
        ...prev,
        favoriteMovies: updatedFavorites,
      }));
      alert("Movie added to favorites!");
    } catch (error) {
      alert("Failed to add movie to favorites. Please try again.");
    }
  };

  const handleRemoveFavorite = async (movieId) => {
    try {
      const response = await axios.delete(`/api/v1/favorites/${movieId}`, {
        headers: {
          Authorization: `Bearer ${isAuthenticated.token}`,
        },
      });

      const updatedFavorites = response.data.data;
      setProfileData((prev) => ({
        ...prev,
        favoriteMovies: updatedFavorites,
      }));
      alert("Movie removed from favorites.");
    } catch (error) {
      alert("Failed to remove movie from favorites. Please try again.");
    }
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSavePassword = async () => {
    const { oldPassword, newPassword, confirmNewPassword } = passwordData;

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const response = await axios.put(
        "/api/v1/user/password",
        { oldPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${isAuthenticated.token}`,
          },
        }
      );

      if (response.data.status === "success") {
        alert("Password changed successfully!");
        setPasswordData({
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
        setIsEditingPassword(false);
      } else {
        alert("Failed to change password. Please try again.");
      }
    } catch (error) {
      alert("Error changing password. Please check your old password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900 pt-20">
      <div className="container mx-auto p-4">
        <div className="bg-gray-900 dark:bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4">
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

            <div className="w-1/2">
              {isEditing ? (
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={(e) =>
                      handleProfileChange("firstName", e.target.value)
                    }
                    className="text-lg font-bold mb-2 p-1 bg-gray-700 dark:bg-gray-200 rounded"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={(e) =>
                      handleProfileChange("lastName", e.target.value)
                    }
                    className="text-lg font-bold mb-2 p-1 bg-gray-700 dark:bg-gray-200 rounded ml-4"
                    placeholder="Last Name"
                  />
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={(e) => handleProfileChange("bio", e.target.value)}
                    className="w-full bg-gray-700 dark:bg-gray-200 rounded p-1 mb-2"
                    placeholder="Bio"
                  />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={(e) =>
                      handleProfileChange("email", e.target.value)
                    }
                    className="w-full bg-gray-700 dark:bg-gray-200 rounded p-1"
                    placeholder="Email"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-2xl font-bold">
                    {profileData.firstName} {profileData.lastName}
                  </h1>
                  <p>{profileData.bio}</p>
                  <p>{profileData.email}</p>
                </div>
              )}

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-2 px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
              >
                {isEditing ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-900 dark:bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>

          {isEditingPassword ? (
            <div className="space-y-4">
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={(e) =>
                  handlePasswordChange("oldPassword", e.target.value)
                }
                className="block w-1/4 bg-gray-700 dark:bg-gray-200 rounded p-1"
                placeholder="Old Password"
              />
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={(e) =>
                  handlePasswordChange("newPassword", e.target.value)
                }
                className="block w-1/4 bg-gray-700 dark:bg-gray-200 rounded p-1"
                placeholder="New Password"
              />
              <input
                type="password"
                name="confirmNewPassword"
                value={passwordData.confirmNewPassword}
                onChange={(e) =>
                  handlePasswordChange("confirmNewPassword", e.target.value)
                }
                className="block w-1/4 bg-gray-700 dark:bg-gray-200 rounded p-1"
                placeholder="Confirm New Password"
              />
              <button
                onClick={handleSavePassword}
                className="mt-2 px-4 py-1 text-white bg-green-500 hover:bg-green-600 rounded"
              >
                Save Password
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingPassword(true)}
              className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded"
            >
              Edit Password
            </button>
          )}
        </div>

        {loadingFavorites ? (
          <p>Loading favorite movies...</p>
        ) : errorFavorites ? (
          <p className="text-red-500">{errorFavorites}</p>
        ) : (
          <FavoriteMovies
            movies={profileData.favoriteMovies}
            handleRemove={handleRemoveFavorite}
            handleAdd={handleAddFavorite}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
