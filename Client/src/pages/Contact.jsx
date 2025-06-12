import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/messageSlice";

const Modal = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <>

      <div
        id="popup-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-10 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        style={{ marginLeft: "38%", marginTop: "10%" }}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-blue-200 rounded-lg shadow-sm dark:bg-gray-700">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
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
            <div className="p-4 md:p-5 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-paper-heart mx-auto mb-4 text-blue-800 w-12 h-12 dark:text-blue-800"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-blue-800 dark:text-blue-800">
                Your Message Has Been Sent Successfully! <br />
                Someone Will Contact You Soon
              </h3>
              <button
                onClick={() => navigate("/")}
                data-modal-hide="popup-modal"
                type="button"
                className="text-blue-800 hover:text-orange-500 bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    messageDate: "",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "US",
    phoneNumber: "",
    messageBody: "",
  });

  console.log("test");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(contactForm));
    setShowModal(true);
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-7xl mt-10 font-semibold tracking-tight text-balance text-orange-500 sm:text-7xl">
          Contact Us.
        </h2>
        {/* <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p> */}
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="date"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Date
            </label>
            <div className="mt-2.5">
              <input
                value={contactForm.messageDate}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    messageDate: e.target.value,
                  })
                }
                type="date"
                name="date"
                id="date"
                autoComplete="date"
                className=" mb-6 block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-semibold text-blue-700"
              
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                value={contactForm.firstName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, firstName: e.target.value })
                }
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                placeholder="Ashley"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                value={contactForm.lastName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, lastName: e.target.value })
                }
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Brooks"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                value={contactForm.company}
                onChange={(e) =>
                  setContactForm({ ...contactForm, company: e.target.value })
                }
                type="text"
                name="company"
                id="company"
                placeholder="For Orange By Orange"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Ashley@fobo.com"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-700">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    value={contactForm.country}
                    onChange={(e) =>
                      setContactForm({
                        ...contactForm,
                        country: e.target.value,
                      })
                    }
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700 sm:text-sm/6"
                  >
                    <option value="US">US</option>
                    <option value="CA">CA</option>
                    <option value="EU">EU</option>
                  </select>
                  <svg
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  value={contactForm.phoneNumber}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      phoneNumber: e.target.value,
                    })
                  }
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-blue-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="123-456-7890"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                value={contactForm.messageBody}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    messageBody: e.target.value,
                  })
                }
                name="message"
                id="message"
                rows="4"
                placeholder="Enter your message here...."
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              ></textarea>
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <button
                type="button"
                className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-blue-700/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                role="switch"
                aria-checked="false"
                aria-labelledby="switch-1-label"
              >
                <span className="sr-only">Agree to policies</span>

                <span
                  aria-hidden="true"
                  className="size-4 translate-x-0 transform rounded-full bg-white ring-1 shadow-xs ring-blue-700/5 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
            <label className="text-sm/6 text-gray-600" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600">
                {" "}
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-800 shadow-xs hover:bg-blue-700 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Contact;