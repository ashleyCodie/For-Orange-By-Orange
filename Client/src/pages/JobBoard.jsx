import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addJob, jobList, jobSearched } from "../redux/jobSlice";

const JobModal = ({ setShowModal }) => {
  const [jobForm, setJobForm] = useState({
    jobTitle: "",
    companyName: "",
    contact: "",
    email: "",
    website: "",
    phone: "",
    description: "",
    requirements: "",
    salary: "",
    logo: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(jobForm));
    setShowModal(false);
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "25%" }}
    >
      <div className="relative p-4 w-full max-w-1/2 max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-orange-300 rounded-lg shadow-sm dark:bg-blue-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white">
              Add New Job Posting
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-blue-700 bg-transparent hover:bg-gray-200 hover:text-blue-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={handleSubmit} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="jobTitle"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Job Title
                </label>
                <input
                  value={jobForm.jobTitle}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      jobTitle: e.target.value,
                    })
                  }
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Company name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="companyName"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  value={jobForm.companyName}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      companyName: e.target.value,
                    })
                  }
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Company name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="contact"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Contact Person
                </label>
                <input
                  value={jobForm.contact}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      contact: e.target.value,
                    })
                  }
                  type="text"
                  name="contact"
                  id="contact"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Contact Person"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Phone
                </label>
                <input
                  value={jobForm.phone}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      phone: e.target.value,
                    })
                  }
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="480-456-7896"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={jobForm.email}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      email: e.target.value,
                    })
                  }
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="ashley@persevere.com"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Website
                </label>
                <input
                  value={jobForm.website}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      website: e.target.value,
                    })
                  }
                  type="text"
                  name="website"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="ashley@persevere.com"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="requirements"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Requirements
                </label>
                <input
                  value={jobForm.requirements}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      requirements: e.target.value,
                    })
                  }
                  type="text"
                  name="requirements"
                  id="requirements"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Masters Degree, HS Diploma"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Details
                </label>
                <textarea
                  value={jobForm.details}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      details: e.target.value,
                    })
                  }
                  type="text"
                  name="details"
                  id="details"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="What are the full details?"
                  required=""
                ></textarea>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="salary"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Salary
                </label>
                <input
                  maxLength={30}
                  value={jobForm.salary}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      salary: e.target.value,
                    })
                  }
                  type="text"
                  name="salary"
                  id="salary"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$40,000"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="logo"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Logo Image
                </label>
                <input
                  value={jobForm.logo}
                  onChange={(e) =>
                    setJobForm({
                      ...jobForm,
                      logo: e.target.value,
                    })
                  }
                  type="text"
                  name="logo"
                  id="logo"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="myimage.jpg"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Post New Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const JobBoard = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ text, setText ] = useState("");
  const { jobs, searchText } = useSelector((state) => state.job);

  console.log("jobs", jobs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("jobs", jobs);
  }, [jobs]);

  useEffect(() => {
    dispatch(jobList());
  }, [jobList]);

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(jobSearched(text));
  
  };

  return (
    <>
      <div className="grid grid-cols-3 mt-30 pt-10">
        {/* //section1 */}
        <div className="">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="bg-orange-500 text-blue-700 w-40 text-lg font-bold inline-flex items-center rounded-lg p-2 ml-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus-square-fill pe-1 ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
            </svg>
            <span className="ml-2">Post A Job.</span>
          </button>
        </div>
        {/* //section 2 */}
        <div>
          <h1 className=" text-orange-500 text-center text-7xl ">Job Board.</h1>
        </div>

        {/* //section 3 search bar*/}
        <div className="ml-35">
          <form onSubmit={submitSearch} className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search.
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-blue-700 rounded-lg bg-gray-50 focus:ring-blue-700 focus:border-blue-500 dark:bg-gray-700 dark:border-blue-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Specific Job Type..."
                required
              />
              <button
                type="submit"
                className="text-orange-500 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-2mt-5 pb-5 ml-88 pl-35  ">
        <div className=" w-full max-w-4xl p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 "
            >
              {jobs
                // .slice(0, 17)
                .filter(
                  (job) =>
                    searchText === "" ||
                    job.jobTitle.toLowerCase() === searchText.toLowerCase()
                )
                .map((job, index) => (
                  <Link
                    key={index}
                    to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <img
                            className="w-12 h-12 rounded-full ml-10"
                            src={
                              new URL(
                                `../assets/images/${job.logo}`,
                                import.meta.url
                              ).href
                            }
                            alt="Logo"
                          />
                        </div>
                        <div className="flex-1 min-w-0 ms-4 text-center">
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

        {/* <div >
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs
                  .filter(
                    (job) =>
                      searchText === "" ||
                      job.jobTitle.toLowerCase() === searchText.toLowerCase()
                  )
                  .map((job, index) => (
                    <Link
                      key={index}
                      to={`/job-details/${job.id}`}
                      className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center">
                          <div className="shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
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
        </div> */}

        {/* <div>
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs
               
                .filter(job =>
                      searchText === "" ||
                      job.jobTitle.toLowerCase() === searchText.toLowerCase()
                  ).map((job, index) => (
                  <Link
                    key={index}
                    to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
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
        </div> */}

        {/* <div>
          <div className="w-full max-w-md p-4 bg-orange-500 border-2 border-blue-700 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {jobs
              
                .filter(job =>
                  searchText === "" ||
                  job.jobTitle.toLowerCase() === searchText.toLowerCase()
              )
                .map((job, index) => (
                  <Link
                    key={index}
                    to={`/job-details/${job.id}`}
                    className="flex flex-col  bg-white border border-blue-700 rounded-lg shadow-sm pe-2 mb-2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
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
        </div> */}
        {showModal && <JobModal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default JobBoard;