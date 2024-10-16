import React, { useRef, useState } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const InputRef = useRef();
  const Input1Ref = useRef("");
  return (
    <div className="profile-page page">
      <div className="container">
        <div className="profile-inner">
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
