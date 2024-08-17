"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [joinAt, setJoinAt] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profileUpdated, setProfileUpdated] = useState(false);

  // Fetch username and join date from APIs
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const users = await axios.get('http://localhost:8080/api/users')
        console.log(users)

        const name = 'Jhon deo'
        const join = '12 january 2024'
        setUsername(name );
        setJoinAt(join);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("/api/updateProfile", {
        username: newUsername,
        password: newPassword,
      });

      if (response.status === 200) {
        setUsername(newUsername);
        setProfileUpdated(true);
        closeModal();
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div className="relative h-[calc(100vh-48px)] w-full flex items-center justify-center gap-10 bg-zinc-900 text-yellow-400">
      {/* Main Content */}
      <div className={`${isModalOpen ? "blur-sm" : ""} z-10`}>
        <div className="flex gap-10 items-center justify-center">
          <div className="w-[200px] h-[240px] bg-gray-400 object-cover">
            <img
              src="/images/profile.png" // Default profile picture
              alt="Profile"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="text-xl font-semibold">
              <span>Username: {username}</span>
            </div>
            <div className="text-yellow-400">Join At: {joinAt}</div>
            {profileUpdated && (
              <div className="text-green-400 mt-2">Profile Updated!</div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="mt-4 bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-700 transition absolute right-10 bottom-10 text-sm"
        >
          Update Profile
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 text-black">
          <div className="bg-slate-300 p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Update Information</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter new username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter new password"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-yellow-100 text-black px-4 py-2 rounded hover:bg-yellow-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
