import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getResource } from "../redux/resourceSlice";

const ResourceDetails = () => {
  const { id } = useParams();
  const { resource } = useSelector((state) => state.resource);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getResource(id));
    }
  }, []);

  return (
    <div className="p-10 h-screen">
      <div className="grid grid-cols-3 mt-31 text-orange-500 p-5">
      <p className="text-center text-orange-500 underline text-4xl font-bold">
        <span className="flex flex-start text-xl">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left-short mt-1"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <Link to="/resources">Back</Link>
        </span>
      </p>
      <div className="text-center ">
      <h1 className="text-5xl text-center text-blue-700">
          {resource.companyName}
        </h1>
        <p className="text-orange-500 mt-10 text-2xl ">
          <span className="text-blue-700">County:</span> {resource.countyFor}{" "}
         
        </p>
        <p className="text-orange-500 text-2xl ">
          
          <span className="text-blue-700 ">Offer:</span> {resource.offer}
        </p>

        <p className="text-xl">
          <span className="text-blue-700 ">Contact:</span> {resource.contact}
        </p>
        <p className="text-xl">
          <span className="text-blue-700 ">Phone Number:</span> {resource.phone}
        </p>
        <p className="text-xl">
          <span className="text-blue-700">Email:</span> {resource.email}
        </p>
        <p className="text-xl">
          <span className="text-blue-700">Website:</span> {resource.website}
        </p>
        <p className="text-xl pt-10">
          <span className="text-blue-700 text-2xl">Details:</span>{" "}
          {resource.details}
        </p>
<div className="justify-items-center">
        <img
          className=" mt-10 rounded-lg items-center"
          src={
            new URL(`../assets/images/${resource.logo}`, import.meta.url).href
          }
          alt=""
        /></div>
      </div>

        <div></div>
      </div>
    </div>
  );
};

export default ResourceDetails;