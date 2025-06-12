import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getEvent, deleteEvent, updateEvent } from "../redux/eventSlice";

const RegisterModal = ({ setShowModal }) => {
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    rsvpKids: "",
    rsvpAdults: "",
  });

  const { event } = useSelector((state) => ({
    event: state.event.event,
  }));
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

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
              Register For Event
            </h3>
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-blue-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  value={event.eventName}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      eventName: e.target.value,
                    })
                  }
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled={true}
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
                  value={event.host}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      host: e.target.value,
                    })
                  }
                  type="text"
                  name="host"
                  id="host"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  disabled={true}
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  First Name
                </label>
                <input
                  value={user.firstName}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      firstName: e.target.value,
                    })
                  }
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  value={user.lastName}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      lastName: e.target.value,
                    })
                  }
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Last Name"
                  required=""
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="rsvpAdults"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  # of Adults
                </label>
                <input
                  value={registerForm.rsvpAdults}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      rsvpAdults: e.target.value,
                    })
                  }
                  type="number"
                  name="rsvpAdults"
                  id="rsvpAdults"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="rsvpKids"
                  className="block mb-2 text-sm font-medium text-blue-700 dark:text-white"
                >
                  # of Kids
                </label>
                <input
                  value={registerForm.rsvpKids}
                  onChange={(e) =>
                    setRegisterForm({
                      ...registerForm,
                      rsvpKids: e.target.value,
                    })
                  }
                  type="number"
                  name="rsvpKids"
                  id="rsvpKids"
                  className="bg-gray-50 border border-gray-300 text-blue-700 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              RSVP Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = ({ setUpdateEvent }) => {
  const { id } = useParams();
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

  const { event } = useSelector((state) => ({
    event: state.event.event,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getEvent(id))
  }, [])

  useEffect(() => {
    if(event) {
    setEventForm(event)
    }
  }, [event])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventUpdate = {
      id: eventForm.id,
      eventName: eventForm.eventName,
      eventDate: eventForm.eventDate,
      host: eventForm.host,
      time: eventForm.time,
      city: eventForm.city,
      state: eventForm.state,
      eventDescription: eventForm.eventDescription,
      price: eventForm.price,
    };
    dispatch(updateEvent(eventUpdate));
    setUpdateEvent(false);
    navigate("/events")
  };

  return (
    <div
      id="crud-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      style={{ marginLeft: "40%", marginTop: "6%" }}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-lg font-semibold text-blue-500 dark:text-white">
              Update Event
            </h3>
            <button
              onClick={() => setUpdateEvent(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-blue-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="host"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
                >
                  Date
                </label>
                <input
                  value={new Date(eventForm.eventDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                  onChange={(e) =>
                    setEventForm({
                      ...eventForm,
                      eventDate: e.target.value,
                    })
                  }
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required=""
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="block p-2.5 w-full text-sm text-blue-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-blue-500 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-blue-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$29"
                  required=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-orange-500 inline-flex items-center bg-blue-700 hover:bg-orange-500 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              Update Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const EventDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateEvent, setUpdateEvent] = useState(false);
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  
  const { event } = useSelector((state) => ({
    event: state.event.event,
  }));
  console.log("event", event);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getEvent(id));
    }
  }, []);

  const handleDelete = () => {
    dispatch(deleteEvent(id));
    navigate("/events");
  };

  return (
    <div className="mt-30 p-10">
      <div className="bg-white border-4 border-orange-500">
        <h1 className="p-20 text-center text-orange-500 text-4xl underline">
          {event.eventName}
        </h1>
        <h2 className=" text-orange-500 text-center text-2xl ">
          <span className="underline">Hosted By:</span>{" "}
          <span className="text-blue-700">{event.host}</span>
        </h2>
        <h2 className=" text-orange-500 text-center text-2xl ">
          <span className="underline">Date:</span>{" "}
          <span className="text-blue-700">
            {new Date(event.eventDate).toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}{" "}
          </span>
          <span className="underline ml-5">Time:</span>{" "}
          <span className="text-blue-700">{event.time}</span>
        </h2>
        <h2 className=" text-orange-500 text-center text-2xl ">
          <span className="underline">Location:</span>{" "}
          <span className="text-blue-700">
            {event.city}, {event.state}
          </span>
        </h2>
        <h2 className=" text-orange-500 text-center text-2xl ">
          <span className="underline">Price:</span>{" "}
          <span className="text-blue-700">${event.price}</span>
        </h2>
        <p className="ps-20 pe-20 pb-20 text-orange-500 text-center text-2xl mt-10">
          <span className="underline">Details:</span>{" "}
          <span className="text-blue-700 ">{event.eventDescription}</span>
        </p>
        <div className="">
          
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="m-5 p-2  bg-blue-700 rounded-lg text-orange-500 font-bold hover:bg-orange-500 hover:text-blue-700"
          >
            Register Now
          </button>
          <div>
          {user.role?.includes("Owner") && (
            <button
              onClick={() => setUpdateEvent(true)}
              type="button"
              className="m-5 p-2  bg-orange-500 rounded-lg text-blue-700 font-bold hover:bg-blue-700 hover:text-orange-500"
            >
              Edit Event
            </button>
          )}</div>
          {user.role?.includes("Owner") && (
            <button
              onClick={handleDelete}
              className="m-5 p-2  bg-blue-700 rounded-lg text-orange-500 font-bold hover:bg-orange-500 hover:text-blue-700"
            >
              Delete Event
            </button>
          )}
        </div>
      </div>
      {showModal && <RegisterModal setShowModal={setShowModal} />}
      {updateEvent && <UpdateModal setUpdateEvent={setUpdateEvent} />}
    </div>
  );
};

export default EventDetails;