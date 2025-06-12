import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, eventList } from "../redux/eventSlice";

const EventModal = ({ setShowModal }) => {
  const [eventForm, setEventForm] = useState({
    eventName: "",
    eventDate: "",
    host: "",
    time: "",
    city: "",
    state: "",
    eventDescription: "",
    price: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(eventForm));
    setShowModal(false);
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "40%", marginTop: "6%" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-orange-300 rounded-lg shadow-sm dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-white">
              Create New Event
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
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Event Name
                </label>
                <input
                  value={eventForm.eventName}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      eventName: e.target.value,
                    })
                  }
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type event name"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="host"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Event Host
                </label>
                <input
                  value={eventForm.host}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      host: e.target.value,
                    })
                  }
                  type="text"
                  name="host"
                  id="host"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type event host"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Date
                </label>
                <input
                  value={eventForm.eventDate}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      eventDate: e.target.value,
                    })
                  }
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Time
                </label>
                <input
                  value={eventForm.time}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      time: e.target.value,
                    })
                  }
                  type="time"
                  name="time"
                  id="time"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  City
                </label>
                <input
                  value={eventForm.city}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      city: e.target.value,
                    })
                  }
                  type="text"
                  name="city"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Phoenix"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  State
                </label>
                <input
                  value={eventForm.state}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      state: e.target.value,
                    })
                  }
                  type="text"
                  name="state"
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="AZ"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Event Description
                </label>
                <textarea
                  value={eventForm.eventDescription}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      eventDescription: e.target.value,
                    })
                  }
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-blue-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Price
                </label>
                <input
                  value={eventForm.price}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      price: e.target.value,
                    })
                  }
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$29"
                  required=""
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
              Add New Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { events } = useSelector((state) => state.event);

  console.log("user", user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    console.log("events", events);
  }, [events]);

  useEffect(() => {
    dispatch(eventList());
  }, [eventList]);



  return (
    <div>
      <h1 className="mt-30 pt-10 text-orange-500 text-center text-7xl ">
        Events.
      </h1>
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
        <span className="ml-2">New Event.</span>
      </button>

      <div className="grid grid-cols-5 p-5 gap-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 dark:text-white">
                  {event.eventName}
                </h5>
              </a>
              <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                <span className="underline font-extrabold text-blue-700">
                  Hosted By:
                </span>{" "}
                {event.host}
              </p>
              <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                <span className="underline font-extrabold text-blue-700">
                  Date:
                </span>{" "}
                {new Date(event.eventDate).toLocaleString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
              <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                <span className="underline font-extrabold text-blue-700">
                  Time:
                </span>{" "}
                {event.time}
              </p>
              <p className="mb-3 font-normal text-blue-700 dark:text-blue-700">
                <span className="underline font-extrabold text-blue-700">
                  Description:
                </span>{" "}
                {event.eventDescription.substring(0, 100)}...
              </p>
              <button
                onClick={() => navigate(`/event-details/${event.id}`)}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-orange-500 bg-blue-700 rounded-lg hover:bg-orange-500 hover:text-blue-700  hover:focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                More Info
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
             
            </div>
          </div>
        ))}
      </div>

      {showModal && <EventModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Events;