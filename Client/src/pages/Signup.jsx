import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import handcuffs from "../assets/images/handcuffs.png";

const Signup = () => {
    const [signupForm, setSignupForm] = useState({ email: "", password: "", username: "", firstName: "", lastName: "", contactNumber: "", company: "" });
    


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("signupForm", signupForm)
        // const signup = {
        //     firstName: signupForm.firstName,
        //     lastName: signupForm.lastName,
        //     email: signupForm.email,
        //     username: signupForm.username,
        //     password: signupForm.password,
        //     roles: [],
        //     token: "",
        //     avatar: "",
        //     contactNumber: signupForm.contactNumber,
        //     company: signupForm.company
        // }
        dispatch(addUser( {...signupForm} ))
        navigate("/login")
    }

  return (
    <div>
        <div className="ml-80 pl-96 pt-60 h-screen">
              <span
                className="flex flex-col items-center bg-white border-4 border-orange-500 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full p-4 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={handcuffs}
                  alt=""
                />
                <div className="flex flex-col justify-between p-10 leading-normal w-96 h-auto">
              <h1 className="text-center text-3xl font-bold text-orange-500">Sign Up For An Account</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-96 mb-5 group mt-2">
                      <input
                      value={signupForm.email}
                      onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
                      }
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-80 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative z-0 w-80 mb-5 group">
                      <input
                        value={signupForm.password}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, password: e.target.value })
                        }
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-80 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        value={signupForm.username}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, username: e.target.value })
                        }
                        type="text"
                        name="username"
                        id="username"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="username"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Username
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={signupForm.firstName}
                          onChange={(e) =>
                            setSignupForm({ ...signupForm, firstName: e.target.value })
                          }
                          type="text"
                          name="floating_first_name"
                          id="floating_first_name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_first_name"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          First name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={signupForm.lastName}
                          onChange={(e) =>
                            setSignupForm({ ...signupForm, lastName: e.target.value })
                          }
                          type="text"
                          name="floating_last_name"
                          id="floating_last_name"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_last_name"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Last name
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={signupForm.contactNumber}
                          onChange={(e) =>
                            setSignupForm({ ...signupForm, contactNumber: e.target.value })
                          }
                          type="tel"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          name="floating_phone"
                          id="floating_phone"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_phone"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          value={signupForm.company}
                          onChange={(e) =>
                            setSignupForm({ ...signupForm, company: e.target.value })
                          }
                          type="text"
                          name="floating_company"
                          id="floating_company"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label
                          htmlFor="floating_company"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Company 
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className=" ml-18 text-blue-700 bg-orange-500 hover:bg-blue-800 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Create My Account.
                    </button>
                  </form>
                </div>
              </span>
            </div>
    </div>
  )
}

export default Signup