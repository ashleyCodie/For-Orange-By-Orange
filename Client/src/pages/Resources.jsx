import { useState, useEffect } from "react"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { resourceList, addResource } from "../redux/resourceSlice"


const ResourceModal = ({ setShowModal }) => {
  const [resourceForm, setResourceForm] = useState({
    companyName: "",
    contact: "",
    email: "",
    website: "",
    phone: "",
    countyFor: "",
    offer: "",
    logo: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addResource(resourceForm));
    setShowModal(false);
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "40%" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-orange-300 rounded-lg shadow-sm dark:bg-blue-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white">
              Add New Resource.
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
                  htmlFor="companyName"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Company Name
                </label>
                <input
                  value={resourceForm.companyName}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
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
                  value={resourceForm.contact}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
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
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Email
                </label>
                <input
                   value={resourceForm.email}
                   onChange={(e) =>
                     setResourceForm({
                       ...resourceForm,
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
                   value={resourceForm.website}
                   onChange={(e) =>
                     setResourceForm({
                       ...resourceForm,
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
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Phone
                </label>
                <input
                   value={resourceForm.phone}
                   onChange={(e) =>
                     setResourceForm({
                       ...resourceForm,
                       phone: e.target.value,
                     })
                   }
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="480-123-4569"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="countyFor"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  County For
                </label>
                <input
                  value={resourceForm.countyFor}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      countyFor: e.target.value,
                    })
                  }
                  type="text"
                  name="countyFor"
                  id="countyFor"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Maricopa"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="offer"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Offer
                </label>
                <input
                  maxLength={30}
                  value={resourceForm.offer}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
                      offer: e.target.value,
                    })
                  }
                  type="text"
                  name="offer"
                  id="offer"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="What does your resource offer?"
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
                  value={resourceForm.details}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
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
                  htmlFor="logo"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Logo Image
                </label>
                <input
                  value={resourceForm.logo}
                  onChange={(e) =>
                    setResourceForm({
                      ...resourceForm,
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
              Add New Resource
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Resources = () => {
  const [ showModal, setShowModal ] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const { resources } = useSelector(state => state.resource)

    useEffect(() => {

        dispatch(resourceList())
        console.log(resources);
    }, []);

    const dispatch = useDispatch()
    const rowsPerPage = 15;
    const totalPages = Math.ceil(resources.length / rowsPerPage);
    const paginatedData = resources
    .filter(resource => resource.companyName)
    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    .sort((a, b) => a.companyName.localeCompare(b.companyName))

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };



    return (
      <div>
        <h1 className="mt-30 pt-10 text-orange-500 text-center text-7xl h-scroll">
        Resources.
      </h1>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="bg-orange-500 text-blue-700 w-45 text-lg font-bold inline-flex items-center rounded-lg p-2 ml-5"
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
        <span className="">New Resource.</span>
      </button>
        <div className="pl-2 pe-2 mb-10 pt-2 overflow-auto shadow-md ">
            <table className="w-full table-fixed text-sm text-left rtl:text-right text-gray-400">
                <thead className="text-sm uppercase bg-blue-700 text-orange-500 tracking-wider">
                    <tr className="">
                        <th scope="col" className="p-4 ps-8">
                            <button
                                className="text-xs ps-"
                                type="button"
                                onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>
                                {currentPage >= 2 ? currentPage - 1 : "Start"}
                            </button>
                        </th>
                        <th scope="col" className="py-3">
                            Company Name
                        </th>
                        <th scope="col" className="px- py-3">
                            Contact Person
                        </th>
                        <th scope="col" className="px- py-3">
                            Email Address
                        </th>
                        <th scope="col" className="px-20 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-10 py-3">
                            County
                        </th>
                        <th scope="col" className="px- py-3">
                            Offer
                        </th>

                        <th>
                            <button
                                className="ps-45 text-xs "
                                type="button"
                                onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ms-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>
                                {currentPage <= totalPages - 1 ? currentPage + 1 : "End"}
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {paginatedData.map((resource) => (
                        <tr key={resource.id} className="italic border-b text-blue-700 font-semibold bg-orange-300 border-blue-700 hover:bg-blue-200 tracking-wide">
                            <td className="w-2 ps-30 ">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 dark:bg-blue-700 dark:border-blue-700" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="py-4 font-medium whitespace-nowrap text-blue-700">
                                {resource.companyName}
                            </th>
                            <td className="ps- py-4">
                                {resource.contact}
                            </td>
                            <td className="ps- py-4">
                                {resource.email}
                            </td>
                            <td className="ps-20 py-4">
                                {resource.phone}
                            </td>
                            <td className="ps-10 py-4">
                                {resource.countyFor}
                            </td>
                            <td className="ps- py-4">
                                {resource.offer}
                            </td>
                            <td className="w-1 pl-20 underline hover:text-orange-500 text-white hover:underline">
                               <Link to={`/resource-details/${resource.id}`}>More Info</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div >
        {showModal && <ResourceModal setShowModal={setShowModal} />}
        </div>
    )
}

export default Resources