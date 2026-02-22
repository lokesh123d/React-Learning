import React, { useContext } from "react";
import { UserContext } from "../UserContext/UserContextProvider";

const Profile = () => {
  const userData = useContext(UserContext);


  return (
    <div>
      Profile: {userData.userData?.userName} - {userData.userData?.password}
    </div>
  );
};

export default Profile;