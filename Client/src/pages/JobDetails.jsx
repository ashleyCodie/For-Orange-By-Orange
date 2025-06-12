import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getJob } from "../redux/jobSlice";

const JobDetails = () => {
    const { id } = useParams();
    const { job } = useSelector((state) => state.job);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (id) {
        dispatch(getJob(id));
      }
    }, []);
  
    return (
      <div className="p-10 h-scroll text-center">
        <div className=" mt-31 text-orange-500 p-5">
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
                fillRule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
            <Link to="/job-board">Back</Link>
          </span>
        </p>
        
          <h1 className="text-5xl text-center text-blue-700">
            {job.jobTitle}
          </h1>
          <p className="text-orange-500 mt-10 text-2xl text-center">
            <span className="text-blue-700">CompanyName:</span> {job.companyName}{" "}
            
          </p>
  
          <p className="text-xl">
            <span className="text-blue-700">Contact:</span> {job.contact}
          </p>
          <p className="text-xl">
            <span className="text-blue-700">Phone Number:</span> {job.phone}
          </p>
          <p className="text-xl">
            <span className="text-blue-700">Email:</span> {job.email}
          </p>
          <p className="text-xl">
            <span className="text-blue-700">Website:</span> {job.website}
          </p>
          <p className="text-xl pt-10">
            <span className="text-blue-700 text-2xl">Location:</span>{" "}
            {job.location}
          </p>
          <p className="text-xl ">
            <span className="text-blue-700 text-2xl">Requirements:</span>{" "}
            {job.requirements}
          </p>
          <p className="text-xl ">
            <span className="text-blue-700 text-2xl">Salary:</span>{" "}
            {job.salary}
          </p>
          <p className="text-xl ">
            <span className="text-blue-700 text-2xl">Description:</span>{" "}
            {job.description}
          </p>
  
          <img
            className="object-cover mt-10  ml-96 pl-90"
            src={
              new URL(`../assets/images/${job.logo}`, import.meta.url).href
            }
            alt=""
          />
        </div>
      </div>
    );
  
}

export default JobDetails