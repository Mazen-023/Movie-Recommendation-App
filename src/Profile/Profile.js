// Profile.js
import React, { useState } from "react";
import FavoriteMovies from "./FavoriteMovies";
import Cookies from "js-cookie";

const Profile = () => {
  const isAuthenticated =
    Cookies.get("data") && JSON.parse(Cookies.get("data")); // Access auth state

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false); // Track password edit mode
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profileData, setProfileData] = useState({
    firstName: isAuthenticated.data.firstName || "First Name",
    lastName: isAuthenticated.data.lastName || "Last Name",
    bio: "Bio",
    email: isAuthenticated.data.email || "Email",
    profileImage: null,
    favoriteMovies: [],
  });

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

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

  const handlePasswordChange = (field, value) => {
    setPasswordData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSavePassword = () => {
    const { oldPassword, newPassword, confirmNewPassword } = passwordData;

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    console.log("Password change initiated:", { oldPassword, newPassword });
    alert("Password changed successfully!");
    setPasswordData({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
    setIsEditingPassword(false); // Hide inputs after saving
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleRemoveFavorite = (id) => {
    const updatedMovies = profileData.favoriteMovies.filter(
      (movie) => movie.id !== id
    );
    setProfileData((prev) => ({ ...prev, favoriteMovies: updatedMovies }));
  };

  return (
    <div className="min-h-screen bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-900 pt-20">
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
                    onChange={(e) =>
                      handleProfileChange("bio", e.target.value)
                    }
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

        {/* Change Password Section */}
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

        {/* Favorite Movies Section */}
        <FavoriteMovies
          movies={profileData.favoriteMovies}
          handleRemove={handleRemoveFavorite}
        />
      </div>
    </div>
  );
};

export default Profile;
