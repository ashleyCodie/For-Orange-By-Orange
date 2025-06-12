import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { userList, getUser } from "../redux/userSlice";
import { eventList } from "../redux/eventSlice";
import { recipeList } from "../redux/recipeSlice";
import { resourceList } from "../redux/resourceSlice";
import { jobList } from "../redux/jobSlice";
import Carousel from "../components/Carousel";

const Dashboard = ( ) => {
  
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { events } = useSelector((state) => state.event);
  const { recipes } = useSelector((state) => state.recipe);
  const { resources } = useSelector((state) => state.resource);
  const { jobs} = useSelector((state) => state.job);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(eventList());
  }, []);

  useEffect(() => {
    dispatch(userList());
  }, [userList]);

  useEffect(() => {
    dispatch(recipeList());
  }, [recipeList]);

  useEffect(() => {
    dispatch(resourceList());
  }, [resourceList]);

  useEffect(() => {
    console.log("users", users);
  }, [users]);

  const handleViewProfile = (userId) => {
    dispatch(getUser(userId));
    navigate(`/view-profile/${userId}`);
  };

  return (
    <div className="">
      <div className="mt-30 pt-10 ml-20 mb-10 text-7xl text-center text-orange-500">
        F.O.B.O. Dashboard.
      </div>
      <p className="text-orange-500">
      <span className="flex flex-start text-sm ml-5 underline">
          <Link to="/events">View All Events</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right mt-1 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
      </p>
      <div className="grid grid-cols-3">
        
        <div className="text-center text-blue-700 mt-10 p-5">
          <span className="underline font-bold text-2xl">
            Events Last Month
          </span>
          <br />
          Members Recently enjoyed a fun trip to Disneyland in Southern
          California. The happiest place on earth brought out the kid in all of
          us.
          <br />
          <br />
          We also visited Snowboel Ski Resort in Flagstaff Arizona. We all got
          out of the heat and enjoyed the higher elevation, the snow and
          refreashed our Skiing/Snowboarding skills!
          <br />
          <br />
          We all enjoyed the Rodeo and Horseshoe Park in Queen Creek, Arizona.
          Did a little shopping at the Vendor Booths, watched the rodeo, enjoyed
          some fried food for lunch, and got to enjoy the views of the San Tan
          Mountains.
          <br />
          <br />
          Thank you to everyone who enjoyed getting together!!
        </div>
        <div className="mt-10">
          <Carousel />
        </div>
        <div className=" text-blue-700 mt-10">
          <h1 className="underline font-bold ml-70 text-2xl mb-5">
            Upcoming Events
          </h1>
          {events.map((event, index) => (
            <ul key={index}>
              <li className="ml-38 text-center">
                {" "}
                <span className="font-extrabold text-orange-500 ">
                  {new Date(event.eventDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </span>
                <span className="ml-5">{event.eventName}</span>
                <span className="ml-5 text-orange-500">
                  {event.city}, {event.state}
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <br />
      <br />
      <hr className="text-orange-500" />
      <p className="text-center text-orange-500 mt-10 p-5 underline text-4xl font-bold">
        <span className="flex flex-start text-sm">
          <Link to="/all-members">View All Members</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right mt-1 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
        New Members.
      </p>

      <div className="grid grid-cols-5 p-5 gap-2">
        {users.slice(0, 5).map((user, index) => (
          <div
            key={index}
            className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center pb-10 mt-10 ">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={
                  new URL(`../assets/images/${user.avatar}`, import.meta.url)
                    .href
                }
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user.firstName} {user.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user.company}
              </span>
              <div className="flex mt-4 md:mt-6">
                <button
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add friend
                </button>
                <button
                  onClick={() => handleViewProfile(`${user.id}`)}
                  type="button"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <hr className="text-orange-500" />
      <p className="text-center text-orange-500 mt-10 p-5 underline text-4xl font-bold">
        <span className="flex flex-start text-sm">
          <Link to="/resources">View All Resources</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right mt-1 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
        New Resources.
      </p>
      {/* {resources.map((resource, index) => (
        <ul className="pl-20 ">
          <li className="text-2xl text-blue-700 ">
            {resource.companyName}{" "}
            <span className="ml-20 text-center">{resource.offer}</span>{" "}
            <span className="ml-20">
              <Link to={`/resource-details/${resource.id}`}>More Info</Link>
            </span>
          </li>
        </ul>
      ))} */}
<div className=" ml-70 ">
<tbody className="ml-70" >
                    {resources.slice(0, 10).map((resource) => (
                        <tr key={resource.id} className="italic border-b text-lg text-blue-700 font-semibold bg-blue-200 border-blue-700 hover:bg-blue-200 tracking-wide">
                            <td className="w-2 ps">
                             
                            </td>
                            <th scope="row" className="font-medium whitespace-nowrap text-blue-700">
                                {resource.companyName}
                            </th>
                            <td className="ps-10 py-4">
                                {resource.contact}
                            </td>
                            <td className="ps-10 py-4 hover:underline hover:text-orange-500">
                            {resource.website}
                            </td>
                      
                            <td className="ps-10 py-4">
                                {resource.countyFor}
                            </td>
                            <td className="ps-10 py-4">
                                {resource.offer}
                            </td>
                            <td className=" pl-20 hover:text-blue-700 text-orange-500 hover:underline">
                               <Link to={`/resource-details/${resource.id}`}>More Info</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
                </div>
      <br />
      <br />
      <hr className="text-orange-500" />
      <p className="text-center text-orange-500 mt-10 p-5 underline text-4xl font-bold">
        <span className="flex flex-start text-sm">
          <Link to="/recipes">View All Recipes</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right mt-1 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
        New Recipes.
      </p>
      <div>
        <div className="grid grid-cols-4 p-5 gap-2">
          {recipes.slice(0, 4).map((recipe, index) => (
            <Link
              to={`/recipe-details/${recipe.id}`}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={
                  new URL(
                    `../assets/images/${recipe.recipePic}`,
                    import.meta.url
                  ).href
                }
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-orange-500">
                  {recipe.recipeName}
                </h5>
                <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                  {recipe.recipeDescription.substring(0, 50)}...
                </p>
                <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                  Prep Time: {recipe.prepTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <br />
      <br />

      <hr className="text-orange-500" />
      <p className="text-center text-orange-500 mt-10 p-5 underline text-4xl font-bold">
        <span className="flex flex-start text-sm text-orange-500">
          <Link to="/job-board">View All Jobs</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right mt-1 ml-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </span>
        New Jobs.
      </p>
      <div className="mt-2 pl-5 pb-5 ml-30 grid grid-cols-3">
        <div>
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs.slice(0, 5).map((job, index) => (
                       <Link 
                       key={index}
                       to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                     >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <img
                          className="w-10 h-10 rounded-full ml-4"
                          src={
                            new URL(
                              `../assets/images/${job.logo}`,
                              import.meta.url
                            ).href
                          }
                          alt="Logo"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-blue-700 truncate dark:text-white">
                          {job.jobTitle}
                        </p>
                        <p className="text-sm text-orange-500 truncate dark:text-orange-500">
                          {job.companyName}
                        </p>
                        <p className="text-sm text-blue-700 truncate dark:text-blue-700">
                          {job.location}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-blue-700 dark:text-white">
                        {job.salary}
                      </div>
                    </div>
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs.slice(6, 11).map((job, index) => (
                       <Link 
                       key={index}
                       to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                     >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <img
                          className="w-10 h-10 rounded-full ml-4"
                          src={
                            new URL(
                              `../assets/images/${job.logo}`,
                              import.meta.url
                            ).href
                          }
                          alt="Logo"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-blue-700 truncate dark:text-white">
                          {job.jobTitle}
                        </p>
                        <p className="text-sm text-orange-500 truncate dark:text-orange-500">
                          {job.companyName}
                        </p>
                        <p className="text-sm text-blue-700 truncate dark:text-blue-700">
                          {job.location}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-blue-700 dark:text-white">
                        {job.salary}
                      </div>
                    </div>
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs.slice(12, 17).map((job, index) => (
                       <Link 
                       key={index}
                       to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                     >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <img
                          className="w-10 h-10 rounded-full ml-4"
                          src={
                            new URL(
                              `../assets/images/${job.logo}`,
                              import.meta.url
                            ).href
                          }
                          alt="Logo"
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-blue-700 truncate dark:text-white">
                          {job.jobTitle}
                        </p>
                        <p className="text-sm text-orange-500 truncate dark:text-orange-500">
                          {job.companyName}
                        </p>
                        <p className="text-sm text-blue-700 truncate dark:text-blue-700">
                          {job.location}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-blue-700 dark:text-white">
                        {job.salary}
                      </div>
                    </div>
                  </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;