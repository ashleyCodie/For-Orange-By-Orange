import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/userSlice.js";

const ViewProfile = () => {

  const { user, users } = useSelector((state) => state.user);

  return (
    <div className="pl-20 pe-20 mt-30 pt-20 h-screen">
      <div className="grid grid-cols-2">
       
        <div className="border-2 border-orange-500 bg-white p-5">
          <h1 className="mt-0 text-7xl text-center text-orange-500">
            {user.username}
          </h1>
          <div className="justify-items-center">
          <img
            className="h-30 rounded-full shadow-lg  mb-5 mt-5"
            src={
              new URL(`../assets/images/${user.avatar}`, import.meta.url).href
            }
          /></div>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Name:</span> {user.firstName}{" "}
            {user.lastName}
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Company:</span> {user.company}
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">City:</span> {user.city}{" "}
            <span className="text-orange-500 ml-20">State:</span> {user.state}
          </p>
          <p className="mt-10 text-2xl text-orange-500 text-center">
            Contact Info:
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Email:</span> {user.email}
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Phone:</span> {user.contactNumber}
          </p>
          <p className="text-2xl text-blue-700 mt-10 text-center">
            <span className="text-orange-500">About Me:</span> {user.aboutMe}
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Release Date:</span>{" "}
            {user.releaseDate}
          </p>
          <p className="text-2xl text-blue-700 text-center">
            <span className="text-orange-500">Complex:</span> {user.complex}
          </p>
        </div>
        <div className="ml-20 text-2xl text-center text-orange-500">
        <div className="border-2 border-orange-500 bg-white p-5">

        <h1 className="mt-0 text-7xl text-center text-orange-500">My Friends.</h1>
        </div>
          {/* <div className="grid grid-cols-3">
            {users.map((user, index) => (
              <div key={index}>
                <img
                  className="h-30 rounded-full shadow-lg items-center mb-5 mt-5 ml-90"
                  src={
                    new URL(
                      `../assets/images/${user.friends[0].avatar}`,
                      import.meta.url
                    ).href
                  }
                />
                <p className="text-orange-500 text-center text-sm">
                  {user.friends[0].username}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;