import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="user-card">
        <div className="flex items-center space-x-4">
          {/* <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
          alt="Profile"
          className="profile-img"
        /> */}
          <img src="https://www.gravatar.com/avatar/?d=mp" alt="Profile" />

          {/* <div className="rounded-full w-16 h-16 bg-gray-200 flex items-center justify-center text-4xl">
            👤
          </div> */}

          <div>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <p>{user.location}</p>
          </div>
        </div>
        <button>Contact</button>
      </div>
    </>
  );
};

export default UserCard;
