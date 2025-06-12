import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { updateUser, getUser } from "../redux/authSlice";



const Profile = () => {
  // const {id} = useParams();
  // console.log("id", id)

  const [userProfile, setUserProfile] = useState({
    
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: "",
    avatar: "",
    country: "US",
    contactNumber: "",
    company: "",
    releaseDate: "",
    complex: "",
    city: "",
    state: "",
    aboutMe: "",
    friends: []
  });


  const { loading, isLoggedIn, user } = useSelector((state) => state.auth);


  useEffect(() => {
    console.log("user", user)
    setUserProfile({ ...user })
  }, [user])
  

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userUpdate = {
    
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      email: userProfile.email,
      username: userProfile.username,
      role: [],
      avatar: "",
      country: userProfile.country,
      contactNumber: userProfile.contactNumber,
      company: userProfile.company,
      releaseDate: userProfile.releaseDate,
      complex:userProfile.complex,
      city: userProfile.city,
      state: userProfile.state,
      aboutMe: userProfile.aboutMe,
      token: "",
      friends: []
    };
    console.log("userUpdate" , userUpdate)
    console.log("userProfile", userProfile)
    dispatch(updateUser( userUpdate ))
    
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
      </div>

      <div className="mx-auto max-w-auto text-center ">
    
        <div>
          <h2 className="text-7xl mt-10  font-semibold tracking-tight text-balance text-orange-500 sm:text-7xl ">
            My Profile.
          </h2>
        </div>
     
        <p className="mt-2 text-lg/8 text-blue-700">This information will be displayed publicly so be careful what you share.</p>
      </div>


      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-3 gap-x-8 gap-y-6 sm:grid-cols-3">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Username
            </label>
            <div className="mt-2.5">
              <input
                value={userProfile.username}
                onChange={(e) =>
                  setUserProfile({
                    ...userProfile,
                    username: e.target.value,
                  })
                }
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className=" mb-6 block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="releaseDate"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Release Date
            </label>
            <div className="mt-2.5">
              <input
                value={userProfile.releaseDate}
                onChange={(e) =>
                  setUserProfile({
                    ...userProfile,
                    releaseDate: e.target.value,
                  })
                }
                type="date"
                name="releaseDate"
                id="releaseDate"
                autoComplete="releaseDate"
                className=" mb-6 block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="complex"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              Complex
            </label>
            <div className="mt-2.5">
              <input
                value={userProfile.complex}
                onChange={(e) =>
                  setUserProfile({
                    ...userProfile,
                    complex: e.target.value,
                  })
                }
                type="text"
                name="complex"
                id="complex"
                autoComplete="complex"
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
                value={userProfile.firstName}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, firstName: e.target.value })
                }
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
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
                value={userProfile.lastName}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, lastName: e.target.value })
                }
                type="text"
                name="last-name"
                id="last-name"
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
                value={userProfile.company}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, company: e.target.value })
                }
                type="text"
                name="company"
                id="company"
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
                value={userProfile.email}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, email: e.target.value })
                }
                type="email"
                name="email"
                id="email"
                autoComplete="email"
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
                    value={userProfile.country}
                    onChange={(e) =>
                      setUserProfile({
                        ...userProfile,
                        country: e.target.value,
                      })
                    }
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="country"
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
                  value={userProfile.contactNumber}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      contactNumber: e.target.value,
                    })
                  }
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-blue-700 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="123-456-7890"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              City
            </label>
            <div className="mt-2.5">
              <input
                value={userProfile.city}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, city: e.target.value })
                }
                type="text"
                name="city"
                id="city"
                autoComplete="city"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="state"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              State
            </label>
            <div className="mt-2.5">
              <input
                value={userProfile.state}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, state: e.target.value })
                }
                type="text"
                name="state"
                id="state"
                autoComplete="state"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-blue-700"
            >
              About Me
            </label>
            <div className="mt-2.5">
              <textarea
                value={userProfile.aboutMe}
                onChange={(e) =>
                  setUserProfile({
                    ...userProfile,
                    aboutMe: e.target.value,
                  })
                }
                name="aboutMe"
                id="aboutMe"
                rows="4"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-blue-700 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-700"
              ></textarea>
            </div>
          </div>
          <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm/6 font-semibold text-blue-700">Avatar</label>
          <div className="mt-2 flex items-center gap-x-3">
            <svg className="size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
            <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-orange-500 ring-1 shadow-xs ring-blue-700 ring-inset hover:bg-blue-700">Change</button>
          </div>
        </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-800 shadow-xs hover:bg-blue-700 hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Update
          </button>
          <button
            onClick={() => (navigate("/dashboard"))}
            type="submit"
            className="block mt-4 w-full rounded-md bg-blue-700 px-3.5 py-2.5 text-center text-sm font-semibold text-orange-500 shadow-xs hover:bg-orange-500 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Cancel
          </button>
        </div>
      </form>
      {/* {showModal && <Modal setShowModal={setShowModal} />} */}
    </div>
  );
};

export default Profile;